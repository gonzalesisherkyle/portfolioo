<template>
  <div class="bg-light-primary dark:bg-dark-primary">
    <!-- header -->
    <HeaderComponent />
    <main class="min-h-screen">
      <HeroComponent />
      <AboutComponent />
      <SkillComponent />
      <ProjectComponent />
      <ContactCompnonent />
    </main>
    <!-- footer -->
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "@/components/Frontend/HeaderComponent.vue";
import FooterComponent from "@/components/Frontend/FooterComponent.vue";
import HeroComponent from "@/components/Frontend/HeroComponent.vue";
import AboutComponent from "@/components/Frontend/AboutComponent.vue";
import SkillComponent from "@/components/Frontend/SkillComponent.vue";
import ProjectComponent from "@/components/Frontend/ProjectComponent.vue";
import ContactCompnonent from "@/components/Frontend/ContactCompnonent.vue";
import "@/assets/tailwind.css";

export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    SkillComponent,
    ProjectComponent,
    ContactCompnonent,
  },
};
</script>

<style></style>
