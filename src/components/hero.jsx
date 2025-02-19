function Hero() {
  return (
    <section class="hero bg-gray-300">
      <div class="container flex justify-center gap-20">
        <div class="user">
          <h1 className="text-7xl font-bold text-gray-950 pt-40 ">Hello <br />I’m Ridho</h1>
          <p className=" text-l text-gray-900 mt-2">Freelancer Web Developer</p>
          <input type="submit" value="Hire Me" className="bg-gray-950 text-white pl-4 pr-4 pt-1 pb-1 mt-3 rounded-md" />
        </div>
        <div class="user-image">
          <img src="/user.webp" alt="user" />
        </div>
      </div>
    </section>
  );
}
export default Hero;
