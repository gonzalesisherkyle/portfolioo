<script setup>
import { ref, computed } from "vue";
import { useMouseInElement } from "@vueuse/core";

const target = ref(null);

const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(target);

const cardTransform = computed(() => {
  const MAX_ROTATION = 6;

  const rX = (MAX_ROTATION / 2 - (elementY.value / elementHeight.value) * MAX_ROTATION).toFixed(2); // handles x-axis

  const rY = ((elementX.value / elementWidth.value) * MAX_ROTATION - MAX_ROTATION / 2).toFixed(2); // handles y-axis

  return isOutside.value
    ? ""
    : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`;
});
</script>
<template>
  <div
    v-motion
    :initial="{
      opacity: 0,
      y: 50,
    }"
    :enter="{
      opacity: 1,
      y: 0,
    }"
    class="relative bg-light-primary dark:bg-dark-primary pt-[110px] pb-[110px] lg:pt-[150px]"
    id="home"
  >
    <div class="container mx-auto">
      <div class="-mx-4 flex flex-wrap">
        <div class="w-full px-4 lg:w-5/12">
          <div class="hero-content">
            <p class="text-lg text-accent tex-md mb-[10px]">Hey, I'm Isher! 👋</p>
            <h1
              class="text-dark mb-3 text-4xl font-bold leading-snug sm:text-[42px] lg:text-[42px] xl:text-[42px]"
            >
              I'm a<br />
              <p class="glitch lg:text-[75px]">
                <span aria-hidden="true">Full Stack Developer</span>
                Full Stack Developer
                <span aria-hidden="true">Full Stack Developer</span>
              </p>
            </h1>
            <ul class="flex flex-wrap items-centers">
              <li>
                <div class="button">
                  <a
                    href="#contact"
                    class="bg-indigo-500 inline-flex items-center justify-center rounded-lg py-4 px-6 text-center text-base font-normal text-black sm:px-10 lg:px-8 xl:px-10"
                  >
                    Contact Me
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div class="socials pt-10">
            <div class="flex gap-x-5 justify-start">
              <div class="mr-4 w-auto py-3">
                <a href="https://www.facebook.com/aysiyer/" target="_blank">
                  <i class="fab fa-facebook"></i>
                </a>
              </div>
              <div class="mr-4 w-auto py-3">
                <a href="https://www.linkedin.com/in/ikmgonzales/" target="_blank">
                  <i class="fab fa-linkedin"></i>
                </a>
              </div>
              <div class="mr-4 w-auto py-3">
                <a href="https://github.com/gonzalesisherkyle" target="_blank">
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="hidden px-4 lg:block lg:w-1/12"></div>
        <div class="w-full px-4 lg:w-6/12">
          <div class="lg:ml-auto lg:text-right">
            <div class="relative z-10 inline-block pt-11 lg:pt-0">
              <div
                class="card"
                ref="target"
                :style="{
                  transform: cardTransform,
                  transition: 'transform 0.25s ease-out',
                }"
              >
                <img src="/storage/images/UI-UX.png" alt="hero" class="max-w-full lg:ml-auto" />
              </div>
              <span class="absolute -right-8 -top-0 z-[-1]">
                <svg width="93" height="93" viewBox="0 0 93 93" fill="none">
                  <circle cx="2.5" cy="2.5" r="2.5" fill="#3F51B5" />
                  <circle cx="2.5" cy="24.5" r="2.5" fill="#3F51B5" />
                  <circle cx="24.5" cy="2.5" r="2.5" fill="#3F51B5" />
                  <circle cx="24.5" cy="24.5" r="2.5" fill="#3F51B5" />
                  <circle cx="46.5" cy="2.5" r="2.5" fill="#3F51B5" />
                  <circle cx="46.5" cy="24.5" r="2.5" fill="#3F51B5" />
                  <circle cx="68.5" cy="2.5" r="2.5" fill="#3F51B5" />
                  <circle cx="68.5" cy="24.5" r="2.5" fill="#3F51B5" />
                  <circle cx="68.5" cy="46.5" r="2.5" fill="#3F51B5" />
                  <circle cx="68.5" cy="68.5" r="2.5" fill="#3F51B5" />
                  <circle cx="68.5" cy="90.5" r="2.5" fill="#3F51B5" />
                  <circle cx="90.5" cy="2.5" r="2.5" fill="#3F51B5" />
                  <circle cx="90.5" cy="24.5" r="2.5" fill="#3F51B5" />
                  <circle cx="90.5" cy="46.5" r="2.5" fill="#3F51B5" />
                  <circle cx="90.5" cy="68.5" r="2.5" fill="#3F51B5" />
                  <circle cx="90.5" cy="90.5" r="2.5" fill="#3F51B5" />
                </svg>
              </span>
              <span class="absolute -left-8 -bottom-8 z-[-1]">
                <svg width="93" height="93" viewBox="0 0 93 93" fill="none">
                  <circle cx="2.5" cy="2.5" r="2.5" fill="#3F51B5" />
                  <circle cx="2.5" cy="24.5" r="2.5" fill="#3F51B5" />
                  <circle cx="2.5" cy="46.5" r="2.5" fill="#3F51B5" />
                  <circle cx="2.5" cy="68.5" r="2.5" fill="#3F51B5" />
                  <circle cx="2.5" cy="90.5" r="2.5" fill="#3F51B5" />
                  <circle cx="24.5" cy="2.5" r="2.5" fill="#3F51B5" />
                  <circle cx="24.5" cy="24.5" r="2.5" fill="#3F51B5" />
                  <circle cx="24.5" cy="46.5" r="2.5" fill="#3F51B5" />
                  <circle cx="24.5" cy="68.5" r="2.5" fill="#3F51B5" />
                  <circle cx="24.5" cy="90.5" r="2.5" fill="#3F51B5" />
                  <circle cx="46.5" cy="68.5" r="2.5" fill="#3F51B5" />
                  <circle cx="46.5" cy="90.5" r="2.5" fill="#3F51B5" />
                  <circle cx="68.5" cy="68.5" r="2.5" fill="#3F51B5" />
                  <circle cx="68.5" cy="90.5" r="2.5" fill="#3F51B5" />
                  <circle cx="90.5" cy="68.5" r="2.5" fill="#3F51B5" />
                  <circle cx="90.5" cy="90.5" r="2.5" fill="#3F51B5" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.button {
  position: relative;
  display: inline-block;
  margin: 20px;
}

.button a {
  color: white;
  font-family: Helvetica, sans-serif;
  font-weight: bold;
  font-size: 36px;
  text-align: center;
  text-decoration: none;
  background-color: rgb(99 102 241);
  display: block;
  position: relative;
  padding: 20px 40px;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  text-shadow: 0px 1px 0px #000;
  filter: dropshadow(color=#000, offx=0px, offy=1px);

  -webkit-box-shadow: inset 0 1px 0 rgb(79 70 229), 0 10px 0 rgb(79 70 229);
  -moz-box-shadow: inset 0 1px 0 rgb(79 70 229), 0 10px 0 rgb(79 70 229);
  box-shadow: inset 0 1px 0 rgb(79 70 229), 0 10px 0 rgb(79 70 229);

  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

.button a:active {
  top: 10px;
  background-color: rgb(109 40 217);

  -webkit-box-shadow: inset 0 1px 0 rgb(109 40 217), inset 0 -3px 0 rgb(79 70 229);
  -moz-box-shadow: inset 0 1px 0 rgb(109 40 217), inset 0 -3pxpx 0 rgb(79 70 229);
  box-shadow: inset 0 1px 0 rgb(109 40 217), inset 0 -3px 0 rgb(79 70 229);
}

.button:after {
  content: "";
  height: 100%;
  width: 103%;
  padding: 4px;
  position: absolute;
  bottom: -15px;
  left: -4px;
  z-index: -1;
  background-color: #2b1800;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

@media (prefers-color-scheme: dark) {
  .button:after {
    background-color: #353839;
  }
}

.fab {
  font-size: 4rem;
}

.fa-facebook,
.fa-github,
.fa-linkedin {
  transition: 0.4s;
  cursor: pointer;
}

.fa-facebook:hover,
.fa-facebook:focus {
  color: #4267b2;
  transform: scale(1.1);
}
.fa-linkedin:hover,
.fa-linkedin:focus {
  color: #0077b5;
  transform: scale(1.1);
}

.fa-github:hover,
.fa-github:focus {
  color: #c9510c;
  transform: scale(1.1);
}

.glitch {
  position: relative;
  text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff, 0.025em 0.04em 0 #fffc00;
  animation: glitch 725ms infinite;
}

.glitch span {
  position: absolute;
  top: 0;
  left: 0;
}

.glitch span:first-child {
  animation: glitch 500ms infinite;
  clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
  transform: translate(-0.04em, -0.03em);
  opacity: 0.75;
}

.glitch span:last-child {
  animation: glitch 375ms infinite;
  clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
  transform: translate(0.04em, 0.03em);
  opacity: 0.75;
}

@keyframes glitch {
  0% {
    text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff, 0.025em 0.04em 0 #fffc00;
  }
  15% {
    text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff, 0.025em 0.04em 0 #fffc00;
  }
  16% {
    text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff, -0.05em -0.05em 0 #fffc00;
  }
  49% {
    text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff, -0.05em -0.05em 0 #fffc00;
  }
  50% {
    text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff, 0 -0.04em 0 #fffc00;
  }
  99% {
    text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff, 0 -0.04em 0 #fffc00;
  }
  100% {
    text-shadow: -0.05em 0 0 #00fffc, -0.025em -0.04em 0 #fc00ff, -0.04em -0.025em 0 #fffc00;
  }
}
</style>
