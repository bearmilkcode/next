
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <nav className="p-4 bg-[#333]">
        <div className="px-32">
          <div className="flex flex-row justify-between bg[#333]">
            <div className="w-full">
              <a href="#" className="text-3xl text-[#fff]">
                Prim
              </a>
            </div>
            <ul className="flex flex-row items-center justify-end w-full gap-4 text-white">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>

          </div>
        </div>
      </nav>
      <section className="bg-[#e5e5e5]">
        <div className="px-32">
          <div className="flex">
            <div className="w-full p-12">
              <h3 className="text-xl font-serif pb-4">This is Sandwichkai</h3>
              <p>An egg sandwich is a simple yet satisfying dish, typically made with scrambled or fried eggs, nestled between slices of bread. Often garnished with ingredients like cheese, lettuce, or mayo, it offers a perfect blend of flavors—savory, creamy, and soft—ideal for breakfast or a quick meal.</p>
              <a href="#" className="inline-block bg-[#808000] text-white rounded-xl py-0.5 px-2 mt-8">Learn more</a>
            </div>

            <div className="p-8">
              <Image src="https://takestwoeggs.com/wp-content/uploads/2022/05/Japanese-Egg-Sandwich-Tamago-Sando-Final-Photography-sq.jpg" alt="Sandwichkai Image" width={400} height={400} />
            </div>
          </div>
        </div>
      </section>
      <section className="blog">
        <div className="px-32">
          <div className="m-4">
            <h3 className="text-xl font-serif my-4">Ingredients</h3>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="">
              <Image src="https://images.unsplash.com/photo-1529258283598-8d6fe60b27f4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Bread Image" width={200} height={200} />
              <h4 className="font-semibold my-4">My Blog</h4>
              <p>Shokupan, a soft and fluffy Japanese white bread, originated in Japan during the Meiji era, inspired by Western bread-making techniques.</p>
              <a href="#" className="inline-block bg-[#808000] text-white rounded-xl py-0.5 px-2 mt-4">Learn more</a>
            </div>

            <div className="blog-item">
              <Image src="https://images.unsplash.com/photo-1529258283598-8d6fe60b27f4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Bread Image" width={200} height={200} />
              <h4 className="font-semibold my-4">My Blog</h4>
              <p>Shokupan, a soft and fluffy Japanese white bread, originated in Japan during the Meiji era, inspired by Western bread-making techniques.</p>
              <a href="#" className="inline-block bg-[#808000] text-white rounded-xl py-0.5 px-2 mt-4">Learn more</a>
            </div>

            <div className="blog-item">
              <Image src="https://images.unsplash.com/photo-1529258283598-8d6fe60b27f4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Bread Image" width={200} height={200} />
              <h4 className="font-semibold my-4">My Blog</h4>
              <p>Shokupan, a soft and fluffy Japanese white bread, originated in Japan during the Meiji era, inspired by Western bread-making techniques.</p>
              <a href="#" className="inline-block bg-[#808000] text-white rounded-xl py-0.5 px-2 mt-4">Learn more</a>
            </div>

          </div>
        </div>
      </section>
      <div className="mt-8 py-12 bg-[#333] text-[#fff]">
        <div className="px-32">
          <div className="grid grid-cols-3 gap-14">
            <div className="flex flex-col m-4 w-full">
              <h4 className="mb-4">Latest post</h4> 

              <div className="flex flex-row">
                <div className="flex flex-col bg-[#f0f0f0] text-[#333] p-2 rounded items-center justify-center mr-2.5 my-2">
                  <p>JULY</p>
                  <p>27</p>
                </div>
                <div className="info">
                  <span className="info-title">Oktober Fest</span>
                  <span className="info-desc">German beer, food, and culture celebration.</span>
                </div>
              </div>

              <div className="flex flex-row">
                <div className="flex flex-col bg-[#f0f0f0] text-[#333] p-2 rounded items-center mr-2.5 my-2">
                  <p>JULY</p>
                  <p>27</p>
                </div>
                <div className="info">
                  <span className="info-title">Oktober Fest</span>
                  <span className="info-desc">German beer, food, and culture celebration.</span>
                </div>
              </div>

              <div className="flex flex-row">
                <div className="flex flex-col bg-[#f0f0f0] text-[#333] p-2 rounded items-center justify-center mr-2.5 my-2">
                  <p>JULY</p>
                  <p>27</p>
                </div>
                <div className="w-full">
                  <span className="info-title">Oktober Fest</span>
                  <span className="info-desc">German beer, food, and culture celebration.</span>
                </div>
              </div>

            </div>
            <div className="flex flex-col m-4 w-full">
              <h4 className="mb-4">About</h4>
              <p>Imagine Sandwich is an innovative sandwich business offering customizable, gourmet sandwiches with locally sourced ingredients. Customers can build their own unique combinations from a wide variety of breads, proteins, vegetables, and sauces. With eco-friendly packaging and a focus on sustainability, Imagine Sandwich delivers fresh, healthy meals with a creative twist.</p>
            </div>
            <div className="flex flex-col m-4 w-full">
              <h4 className="mb-4">Stay Connected</h4>
              <p><i className="fa fa-facebook-square" aria-hidden="true"></i> Facebook</p>
              <p><i className="fa fa-twitter-square" aria-hidden="true"></i> Twitter</p>
              <p><i className="fa fa-instagram" aria-hidden="true"></i> Instagram</p>
              <p><i className="fa fa-envelope" aria-hidden="true"></i> Gmail</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex bg-[#f0f0f0] p-2 w-full items-center justify-center">
        <p>Copyright 2024. Everything will be alright. xxx prim</p>
      </div>

    </div>
  )
}

