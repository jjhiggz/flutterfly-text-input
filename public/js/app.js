window.addEventListener('load', () => {
  const el = $('#app');

  // Compile Handlebar Templates
  const errorTemplate = Handlebars.compile($('#error-template').html());
  const signInTemplate = Handlebars.compile($('#sign-in-template').html());
  const createTriviaQuestionTemplate = Handlebars.compile($('#create-trivia-question-template').html());

  // Router Declaration
  const router = new Router({
    mode: 'history',
    page404: (path) => {
      const html = errorTemplate({
        color: 'yellow',
        title: 'Error 404 - Page NOT Found!',
        message: `The path '/${path}' does not exist on this site`,
      });
      el.html(html);
    },
  });

  router.add('/sign-in', () => {
    let html = signInTemplate();
    el.html(html);
  });

  router.add('/create', () => {
    let html = createTriviaQuestionTemplate();
    el.html(html);
  });

    // Navigate app to current url
  router.navigateTo(window.location.pathname);

   // Highlight Active Menu on Refresh/Page Reload
  const link = $(`a[href$='${window.location.pathname}']`);
  link.addClass('active');

  $('a').on('click', (event) => {
    // Block browser page load
    event.preventDefault();
  
    // Highlight Active Menu on Click
    const target = $(event.target);
    $('.item').removeClass('active');
    target.addClass('active');
  
    // Navigate to clicked url
    const href = target.attr('href');
    const path = href.substr(href.lastIndexOf('/'));
    router.navigateTo(path);
  });

  CodeMirror.fromTextArea(document.querySelector('#editor'),{
    lineNumbers: true,
    matchBrackets: true,
    mode: 'text/x-markdown',
    theme: 'material'
  });

});

