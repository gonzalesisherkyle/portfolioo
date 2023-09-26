<script setup>
import { ref } from "vue";
const showMobileMenu = ref("false");
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark);
const navigations = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];
</script>
<style scoped>
@keyframes sway {
  0% {
    transform: rotate(1deg);
  }
  50% {
    transform: rotate(-1deg);
  }
  100% {
    transform: rotate(1deg);
  }
}
.LightSwitch {
  position: fixed;
  top: -60px;
  border: none;
  background-color: transparent;
  transform-origin: top;
  transform: rotate(1deg);
  animation-name: sway;
  animation-timing-function: ease-in-out;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  transition: 0.2s;
}
.LightSwitch:active {
  top: -5px;
  transition: 0.2s;
}
.LightSwitch:hover {
  cursor: pointer;
}
.LightRope {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.Bead {
  height: 12px;
  width: 12px;
  border-radius: 50%;
  display: block;
}
.Bob {
  border-bottom: 40px solid #cc8800;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  height: 0;
  width: 15px;
  border-radius: 50px 50px 50px 50px;
}

ul {
  padding: 0;
  display: flex;
}

li {
  list-style-type: none;
  padding: 10px 20px;
}

a {
  text-decoration: none;
  text-transform: uppercase;
  font-size: 20px;
  position: relative;
}

ul li a:before {
  content: "";
  width: 0;
  height: 5px;
  background-color: #00bcd4;
  position: absolute;
  top: 120%;
  left: 0;
  transition: all 0.5s;
}

ul li a:after {
  content: "";
  width: 0;
  height: 5px;
  background-color: #f0f;
  position: absolute;
  top: 120%;
  right: 0;
  transition: all 0.5s;
}

ul li a:hover:before {
  width: 50%;
  transform: translateX(100%);
}

ul li a:hover:after {
  width: 50%;
  transform: translateX(-100%);
}
</style>
<template>
  <nav class="bg-light-primary dark:bg-dark-primary border-gray-200 fixed w-full z-20 top-0 left-0">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="/" class="flex items-center">
        <img src="/storage/images/ig-logo.png" class="h-14 mr-3" alt="IG Logo" />
      </a>
      <div class="grid place-content-center">
        <button content="night" class="LightSwitch" @click="toggleDark()">
          <div class="LightRope">
            <span class="Bead bg-dark-primary dark:bg-light-primary"></span>
            <span class="Bead bg-dark-primary dark:bg-light-primary"></span>
            <span class="Bead bg-dark-primary dark:bg-light-primary"></span>
            <span class="Bead bg-dark-primary dark:bg-light-primary"></span>
            <span class="Bead bg-dark-primary dark:bg-light-primary"></span>
            <span class="Bead bg-dark-primary dark:bg-light-primary"></span>
            <span class="Bead bg-dark-primary dark:bg-light-primary"></span>
            <span class="Bead bg-dark-primary dark:bg-light-primary"></span>
            <span class="Bead bg-dark-primary dark:bg-light-primary"></span>
            <span class="Bead bg-dark-primary dark:bg-light-primary"></span>
            <span class="Bead bg-dark-primary dark:bg-light-primary"></span>
            <span class="Bead bg-dark-primary dark:bg-light-primary"></span>
            <span class="Bead bg-dark-primary dark:bg-light-primary"></span>
            <span class="Bead bg-dark-primary dark:bg-light-primary"></span>
            <span class="Bead bg-dark-primary dark:bg-light-primary"></span>
            <span class="Bob"></span>
          </div>
        </button>
      </div>
      <button
        @click="showMobileMenu = !showMobileMenu"
        data-collapse-toggle="navbar-sticky"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-sticky"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div :class="{ hidden: showMobileMenu }" class="w-full md:block md:w-auto" id="navbar-sticky">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0"
        >
          <li v-for="(navigation, index) in navigations" :key="index">
            <a
              :href="navigation.href"
              class="block py-2 pl-3 pr-4 text-dark-primary dark:text-light-primary rounded md:border-0 md:p-0"
              aria-current="page"
            >
              {{ navigation.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
