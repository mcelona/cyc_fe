import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  
  actions: {
    authenticate() {
      let { identification, password } = this.getProperties( 'identification', 'password' );
      var options = { identification: identification, password: password }
      this.get('session').authenticate('authenticator:custom', options).catch((reason) => {
        this.set('errorMessage', reason.errors[0] || reason);
      });
    }
  }
  
});
