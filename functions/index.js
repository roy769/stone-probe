const functions = require('firebase-functions');

//add admin
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

//add welcome message
exports.addWelcomeMessages = functions.auth.user().onCreate(event => {
  const user =event.data;
  console.log('A new user signed in for the first time');
  const fullName = user.displayName || 'Anonymous';


  //save to database
  return admin.database().ref('messages').push({
    name: 'Firebase Bot',
    photUrl: '/images/firebase-logo.png',
    text: `${fullName} signed in for the first time! Welcome`
  }).then(() => console.log('Welcome messages printed to database.'));
});

  exports.sanitizePost = functions.database
    .ref('/posts/{pushId}')
    .onWrite(event => {
      const post = event.data.val()
      if (post.sanitized) {
        return
      }
          console.log("Sanitizing" + event.params.pushId)
          console.log(post)
          post.title = sanitize(post.tile)
          post.body = sanitize(post.body)
          const promise = event.data.ref.set(post)
          return promise
    })

    function sanitize(s) {
      var sanitizedText = s
      sanitizedText = sanitizedText.replace(/\bstupid\b/ig, "wonderful")
      return sanitizedText
    }
