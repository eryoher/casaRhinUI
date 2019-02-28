import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { sendInfo } from '../actions/index';
import { connect } from 'react-redux';

class FormContact extends Component {

  constructor(props){
    super(props);
    this.state = { 'formActive' : false,'showSuccess' :true};
  }

  componentWillReceiveProps(nextProps) {
      //console.log(nextProps);

      if (nextProps.invalid) {
      //    this.setState({errors: true});
      } else {
        //  this.setState({errors: false});
      }
  }

  submitMyForm(data) {
    const {sendInfo, reset, submitting} = this.props;

    return sendInfo(data).then(() => {
      reset();
    });
  }

  handleForm(ban) {
    this.setState({'formActive' : ban});
  }

  renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
      <div>
        <input className="form-control" {...input} placeholder={label} type={type}/>
      </div>
      <div className={ `${touched && error ? 'alert alert-danger mt-1 mb-0':''} ` }  >
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  )

  renderTextareaField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
      <div>
        <textarea className="form-control" {...input} placeholder={label} />
      </div>
      <div className={ `${touched && error ? 'alert alert-danger mt-1 mb-0':''} ` }  >
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  )

  renderSuccess(){
    if( this.props.formResponse !== undefined && this.props.formResponse && this.state.showSuccess ){
      setTimeout(() => {
        this.setState({'showSuccess': false})
      }, 5000);

      return(
        <div className="container">
          <div className="alert alert-success hideMe">
            La informacion se guardo correctamente
          </div>
        </div>
      );
    }else{
      return(
        <div />
      )
    }
  }

  render(){
    const { handleSubmit, reset ,pristine, submitting, invalid} = this.props
    return (
      <form onSubmit={handleSubmit(this.submitMyForm.bind(this))}>
        <div>
          {this.renderSuccess()}
        </div>
        <div>
          <div className="form-group">
            <Field
              name="name"
              component={this.renderField}
              type="text"
              label="Nombre Y Apellido"
            />

          </div>
        </div>
        <div>
          <div className="form-group">
            <Field
              name="phone"
              className="form-control"
              component={this.renderField}
              type="number"
              label="Celular"
            />
          </div>
        </div>
        <div>
          <div className="form-group">
            <Field name="email" type="email" component={this.renderField} label="Correo Electronico"/>
          </div>
        </div>
        <div>
          <div className="form-group">
            <Field name="message" className="form-control"  component={this.renderTextareaField} placeholder="Mensaje" />
          </div>
        </div>
        <div>
          <div className="form-group">
            <Field name="branch" className="form-control select-send" component="select">
              <option value="" disabled defaultValue>La información se enviará</option>
              <option value="Agencia Medellin">Agencia Medellin</option>
              <option value="Agencia Cali">Agencia Cali</option>
              <option value="Departamento Comercial">Departamento Comercial</option>
              <option value="Produccion y Calidad">Produccion y Calidad</option>
            </Field>
          </div>
        </div>
        <div className="terms row text-center">
          <div className="form-grou col-1 pl-5 ml-5">
            <Field
              name="term"
              id="employed"
              component="input"
              type="checkbox"
              className=""
              onClick={() => this.handleForm(!this.state.formActive)}
            />
          </div>
          <div className="col-7">
            <label htmlFor="employed">Acepto Terminos y condiciones</label>
          </div>
        </div>

        <div className="pb-3 pt-2">
          <button type="submit" className="btn btn-rhin mr-2" disabled={!this.state.formActive || invalid}  >
            Eviar
          </button>
          <button type="button" className="btn btn-rhin ml-2" disabled={pristine || submitting} onClick={reset}>
            Limpiar
          </button>
        </div>
      </form>
    )
  }
}

function validate(values){
    const errors = {}

    if (!values.name) {
      errors.name = 'Required'
    } else if (values.name.length < 10) {
      errors.name = 'El nombre debe ser mayor de 10 caracteres'
    }
    if (!values.phone) {
      errors.phone = 'Required'
    }else if (values.phone.length < 10) {
      errors.phone = 'El numero de Telefono debe tener mas de 10 numeros'
    }
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Direccion de correo invalida'
    }

    if (!values.message) {
      errors.message = 'Required'
    }

    if (!values.branch) {
      errors.branch = 'Required'
    }

    return errors

}

function mapStateToProps(state){
  return {
      formData : state.form,
      formResponse : state.data.formResponse
  }
}

FormContact = reduxForm({
  form: 'PostNewContact',
  validate
})(FormContact)

export default connect(mapStateToProps, {sendInfo})(FormContact)
