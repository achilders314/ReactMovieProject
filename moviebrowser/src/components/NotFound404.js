import Hero from './Hero'

const NotFound404 = () => {
    return(
      <div>
        <Hero text="404: Page Not Found" />
              <div className="errorContent mx-auto my-4">
                <p className='lead'>
                Oops that page doesn't exist. Try again.
                </p>
                <img src="https://i.ibb.co/W6YJHpv/nope.png" alt="page designer saying nope" className="bitmojiImages" />
              </div>
      </div>
    )
  }

  export default NotFound404;

  //https://i.ibb.co/L90NsGD/sticker.png
  //https://i.ibb.co/6bQqtS7/nooooooo.png
  //https://i.ibb.co/W6YJHpv/nope.png