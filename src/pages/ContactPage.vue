<template>
  <div class="page contact-page rk">
    <div class="container">
      <h2 class="tag rk">&lt;contact&gt;</h2>
      <div class="row">
        <div class="profile col-md-4">
          <img class="profile__photo" src="img/photo.jpg" alt="Zdjęcie">
          <h2 class="profile__name">Robert Kirsz</h2>
          <div class="profile__links">
            <a class="fa fa-envelope-o" href="mailto:robert.kirsz@gmail.com" data-toggle="tooltip" data-placement="top" title="Email" aria-hidden="true"></a>
            <a class="fa fa-codepen" href="http://codepen.io/robertkirsz/" data-toggle="tooltip" data-placement="top" title="CodePen" aria-hidden="true"></a>
            <a class="fa fa-github" href="https://github.com/robertkirsz" data-toggle="tooltip" data-placement="top" title="GitHub" aria-hidden="true"></a>
            <a class="fa fa-file-text-o" href="https://goo.gl/uEcGl3" data-toggle="tooltip" data-placement="top" title="CV in Google Docs" aria-hidden="true" target="_blank"></a>
          </div>
        </div>
        <div class="bio col-md-4">
          <p>
            Frontend developer especially interested in working with UI and UX, creating rich, involving and accessible interfaces for progressive web apps.
            <br><br>
            Developed fully functional, responsive applications based on business requirements, delivered in HTML, CSS and JavaScript, using mainly React with Redux.
            <br><br>
            Participated in projects in all stages of the product lifecycle, from design to deployment. Gained experience in creating projects from scratch, as well as working with and maintaining existing codebases.
          </p>
        </div>
        <div class="form col-md-4">
          <form>
            <div class="form-group">
              <div class="input-group">
                <span class="input-group-addon"><span class="glyphicon glyphicon-user"></span></span>
                <input type="text" class="form-control" name="name" placeholder="Name" required>
              </div>
            </div>
            <div class="form-group">
              <div class="input-group">
                <span class="input-group-addon"><span class="glyphicon glyphicon-envelope"></span></span>
                <input type="email" class="form-control" name="email" placeholder="Email" required>
              </div>
            </div>
            <div class="form-group">
              <textarea name="message" class="form-control" rows="8" cols="25" required="required" placeholder="Message"></textarea>
            </div>
            <button type="submit" class="btn btn-primary pull-right">Send</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ContactPage',
    data () {
      return {
        text: 'Contact'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .contact-page {
  	.container {
  		padding-bottom: 15px;
  		margin: 0 auto 50px;
  	}

    .profile {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  		margin-bottom: 30px;
  		&__photo { border-radius: 50%; }
  		&__name {}
  		&__links {
        display: flex;
        justify-content: space-between;
  			a {
  				font-size: 2.5em;
  				text-decoration: none;
  				&:not(:first-child) {
  					margin-left: 0.5em;
  				}
  			}
  		}
  	}

    .bio { margin-bottom: 30px; }

    .form {
  		.input-group-addon {
  			background: #E6E6E6;
  			border: none;
  			box-shadow: 0 3px #D9D9D9;
  		}

    	.form-control {
  			background: #fafafa;
  			border: none;
  			box-shadow: 0 3px #D9D9D9;
  		}

    	.form-group {
  			margin-bottom: 12px;
  		}

    	.btn {
  			transition: background 0.3s;
  			outline: none;
  			min-width: 64px;
  			&.nonactive {
  				pointer-events: none;
  			}
  		}
  	}
  }
</style>
