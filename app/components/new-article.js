import Ember from 'ember';

export default Ember.Component.extend({
  addNewArticle: false,
  actions: {
    articleFormShow() {
      this.set('addNewArticle', true);
    },
    saveArticle() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        text: this.get('text'),
        image: this.get('image')
      };
      this.set('addNewArticle', false);
      this.sendAction('saveArticle', params);
    }
  }
});
