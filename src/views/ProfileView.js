export default class ProfileView  {
    
    constructor() {
        this.app = document.querySelector('#app');
        this.form = this.createElement('form');

        this.fnameDiv = this.createElement('div', 'mb-3');
        this.fnameLabel = this.createElement('label', 'form-label');
        this.fnameLabel.textContent = 'First Name';
        this.firstName = this.createElement('input',  'form-control');
        this.firstName.type = 'text';
        this.firstName.id = 'fname';
        this.firstName.required = true;
        this.fnameDiv.append(this.fnameLabel, this.firstName);

        this.lnameDiv = this.createElement('div', 'mb-3');
        this.lnameLabel = this.createElement('label', 'form-label');
        this.lnameLabel.textContent = 'Last Name';
        this.lastName = this.createElement('input',  'form-control');
        this.lastName.type = 'text';
        this.lastName.id = 'lname';
        this.lastName.required = true;
        this.lnameDiv.append(this.lnameLabel, this.lastName);

        this.emailDiv = this.createElement('div', 'mb-3');
        this.emailLabel = this.createElement('label', 'form-label');
        this.emailLabel.textContent = 'E-mail';
        this.email = this.createElement('input',  'form-control');
        this.email.type = 'email';
        this.email.id = 'email';
        this.email.required = true;
        this.emailDiv.append(this.emailLabel, this.email);

        this.usernameDiv = this.createElement('div', 'mb-3');
        this.usernameLabel = this.createElement('label', 'form-label');
        this.usernameLabel.textContent = 'Username';
        this.username = this.createElement('input',  'form-control');
        this.username.type = 'text';
        this.username.id = 'username';
        this.username.required = true;
        this.usernameDiv.append(this.usernameLabel, this.username);

        this.passwordDiv = this.createElement('div', 'mb-3');
        this.passwordLabel = this.createElement('label', 'form-label');
        this.passwordLabel.textContent = 'Password';
        this.password = this.createElement('input',  'form-control');
        this.password.type = 'password';
        this.password.id = 'password';
        this.password.required = true;
        this.passwordDiv.append(this.passwordLabel, this.password);
        
        this.submitButton = this.createElement('button', 'btn btn-primary');
        this.submitButton.type = 'button';
        this.submitButton.textContent = 'Register';

        this.form.append(this.fnameDiv, this.lnameDiv,  this.emailDiv, this.usernameDiv, this.passwordDiv,  this.submitButton);
        this.app.append(this.form);
    }

    createElement(tag, classes) {
        let element = document.createElement(tag);
        if(classes) {
            classes  = classes.split(' ');
            if(classes.length > 1) {
                classes = [...classes];
            }
        }
        element.classList.add(classes);
        return element;
    }
}
new ProfileView();

//module.exports.ProfileView;
