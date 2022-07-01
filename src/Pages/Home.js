import React from "react";

const Home = () => {
  return (
    <div>
      {/* <!-- Container for demo purpose --> */}
      <div>
        {/* <!-- Section: Design Block --> */}
        <section class="mb-40">
          <div
            class="text-center bg-gray-50 text-gray-800 py-24 px-6"
            style={{
              backgroundPosition: "50%",
              backgroundImage:
                "url('https://mdbcdn.b-cdn.net/img/new/slides/146.webp')",
              height: "500px",
            }}
          >
            <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
              The best offer on the market <br />
              <span class="text-blue-600">for your business</span>
            </h1>
            <button
              class="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              Get started
            </button>
          </div>
        </section>
        {/* <!-- Section: Design Block --> */}
      </div>
      {/* <!-- Container for demo purpose --> */}
    </div>
  );
};

export default Home;
