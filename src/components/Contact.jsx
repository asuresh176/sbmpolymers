import React from 'react';
import mail from '../images/mail.png';
import phone from '../images/phone.png';
import '../css/App.css';
import {Container, Col, Form, FormGroup, Label, Input,  Button,FormFeedback} from 'reactstrap';
import emailjs from 'emailjs-com';

class Contact extends React.Component {
  constructor(props) {
      super(props);
      this.state = { name: '',
                     phone: '',
                     email:'',
                     feedback: '',
                     validate: {
                       emailState: '',
                      },};
    }
    myChangeHandler = (event) => {
      let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
    this.handleChange = this.handleChange.bind(this);
	   this.handleSubmit = this.handleSubmit.bind(this);
    }




    handleChange = async (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    await this.setState({
      [ name ]: value,
    });
  }
  render () {
    return (<div className="container">
              <div class='row col-md-12'>
                <div class='row col-md-6'>
                  <p><br/><br/><h1>Contact</h1><br/><br/>
                  <p>SBM Polymers<br/>
                  #5B, Priyadharshini Granite Pvt Ltd <br/>
                  KIADB Industrial Area <br/>
                  Anthrasanahalli<br/>
                  Tumukur – 572 106 <br/>
                  Bangalore India <br/><br/>
                  <div style={{ textAlignVertical: 'bottom'}}><img src={phone} alt="phone" style={{width: '20px', height: '20px', verticalAlign:'top'}} /> 9606365004 / 9945074287 </div>
                  <div style={{ textAlignVertical: 'bottom'}}><img src={mail} alt="mail" style={{width: '20px', height: '20px', verticalAlign:'top'}} /> sales@sbmpolymers.com </div><br/>
                  </p>

                  </p>

                </div>
                <div class='row col-md-1'>
                  <div class="vl"></div>
                </div>
                <div class='row col-md-6'>
                    <p><br/><br/><h1>Enquiry</h1></p>
                      <Container className="Contact">
                      <Form className="form" onSubmit={ (e) => this.handleSubmit(e) }>
                        <Col>
                          <FormGroup>
                            <Label>Name</Label>
                            <Input
                              type="text"
                              name="name"
                              id="name"
                            />
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup>
                            <Label>Email</Label>
                            <Input
                              type="email"
                              name="email"
                              id="email"
                              placeholder="myemail@email.com"
                              valid={ this.state.validate.emailState === 'has-success' }
                              invalid={ this.state.validate.emailState === 'has-danger' }
                              onChange={ (e) => {
                            this.validateEmail(e)
                            this.handleChange(e)
                          } }
                            />
                            <FormFeedback invalid>
                              Please input a correct email.
                            </FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup>
                            <Label>Phone Number</Label>
                            <Input
                              type="phone"
                              name="phone"
                              id="phone"
                            />
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup>
                            <Label>Company Name</Label>
                            <Input
                              type="text"
                              name="companyName"
                              id="companyName"
                            />
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup>
                            <Label>Enquiry Details/Message</Label>
                            <Input
                              type="textarea"
                              rows="5"
                              name="feedback"
                              id="feedback"
                            />
                          </FormGroup>
                        </Col>
                        <Button>Submit</Button>
                      </Form>
                    </Container>
                </div>
              </div>
            </div>);
  };

  validateEmail(e) {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { validate } = this.state
      if (emailRex.test(e.target.value)) {
        validate.emailState = 'has-success'
      } else {
        validate.emailState = 'has-danger'
      }
      this.setState({ validate })
    }

  handleSubmit (event) {
  event.preventDefault();
	//this.sendFeedback(templateId, {companyName: this.state.feedback, name: this.state.name})
  emailjs.sendForm('gmail', 'enquiry', event.target, 'user_C3HoI5JwoAFJ00oG1znVT')
     .then((result) => {
         console.log(result.text);
     }, (error) => {
         console.log(error.text);
     });
  }

  sendFeedback (templateId, variables) {
	emailjs.send(
  	'gmail', templateId,
  	variables
  	).then(res => {
    	console.log('Email successfully sent!')
  	})
  	// Handle errors here however you like, or use a React error boundary
  	.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }
}

export default Contact;
