<template>
  <section
    class="bg-light-primary dark:bg-dark-primary pt-20 pb-10 lg:pt-[120px] lg:pb-20"
    id="portfolio"
  >
    <div
      class="container mx-auto"
      v-motion
      :initial="{
        opacity: 0,
        y: 100,
      }"
      :visible="{
        opacity: 1,
        y: 0,
      }"
    >
      <div class="-m-4 flex flex-wrap justify-center">
        <div class="w-full px-4">
          <div class="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
            <span class="text-accent text-primary mb-2 block text-lg font-semibold">
              Portfolio
            </span>
            <h2 class="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
              My latest works
            </h2>
          </div>
        </div>
        <div class="card w-full px-4 md:w-1/2 xl:w-1/3 m-1 bg-ojtis bg-cover bg-center">
          <div class="ojtis after:opacity-75"></div>
          <a href="https://ojtis-test.puptaguigcs.net/" target="_blank">
            <button class="card-btn">Visit</button>
          </a>
        </div>
        <div class="card w-full px-4 md:w-1/2 xl:w-1/3 m-1 bg-portfolio bg-cover bg-center">
          <div class="portfolio after:opacity-75"></div>
          <a href="/">
            <button class="card-btn">Visit</button>
          </a>
        </div>
        <!-- <div class="w-full px-4 md:w-1/2 xl:w-1/3">
          <div class="mb-10 overflow-hidden rounded-lg bg-dark-primary dark:bg-light-primary">
            <img src="/storage/projects/ojtis.png" alt="image" class="w-full" />
            <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
              <h3>
                <a
                  class="text-white dark:text-black mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                >
                  On-the-Job Training Information System
                </a>
              </h3>
              <a
                href="https://ojtis-test.puptaguigcs.net/"
                class="text-blue-500 inline-block rounded-full border border-white dark:border-black py-2 px-7 text-base font-medium transition hover:text-blue-800"
                target="_blank"
              >
                Visit site
              </a>
            </div>
          </div>
        </div>
        <div class="w-full px-4 md:w-1/2 xl:w-1/3">
          <div class="mb-10 overflow-hidden rounded-lg bg-dark-primary dark:bg-light-primary">
            <img src="/storage/projects/portfolio.png" alt="image" class="w-full" />
            <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
              <h3>
                <a
                  class="text-white dark:text-black mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                >
                  Portfolio<br />Website
                </a>
              </h3>
              <a
                href="/"
                class="text-blue-500 inline-block rounded-full border border-white dark:border-black py-2 px-7 text-base font-medium transition hover:text-blue-800"
              >
                Visit site
              </a>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>
<script setup></script>
<style scoped>
.card {
  position: relative;
  height: 300px;
  border-radius: 10px;
  display: flex;
  padding: 10px 30px;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.ojtis,
.portfolio {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.6);
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.card:hover .ojtis,
.card:hover .portfolio {
  opacity: 1;
  pointer-events: auto;
}

.card .card-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  font-weight: 600;
  padding: 10px 20px;
  font-size: 16px;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 999;
  border: none;
  opacity: 0;
  scale: 0;
  transform-origin: 0 0;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.15);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.card:hover .card-btn {
  opacity: 1;
  scale: 1;
}

.card .card-btn:hover {
  box-shadow: 0 0 0px 5px rgba(0, 0, 0, 0.3);
}

.card .card-btn:active {
  scale: 0.95;
}

.ojtis::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  width: 100%;
  height: 100%;
  background-image: linear-gradient(-45deg, #ed1717 0%, #ffee00 100%);
  transition: transform 0.5s ease;
}

.portfolio::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  width: 100%;
  height: 100%;
  background-image: linear-gradient(-45deg, #3f0081 0%, #aab1e5 100%);
  transition: transform 0.5s ease;
}

.card:hover .ojtis::after,
.card:hover .portfolio::after {
  transform: translate(-50%, -50%) scale(2);
}
</style>
