import Ember from 'ember';

export default Ember.Component.extend({
  updateArticleForm: false,
  actions: {
    update(article, params) {
      this.sendAction('update', article, params);
    },
    delete(article) {
      if (confirm('Are you sure you want to delete this article?')) {
        this.sendAction('destroyArticle', article);
      }
    }
  }
});
