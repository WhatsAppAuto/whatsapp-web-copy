<template>
  <div class="flex flex-col w-full h-full flex-1 bg-gray-800 rounded-l-lg">
    <app-sidebar-header />

    <div class="overflow-auto">
      <div v-for="contact in contacts" :key="contact._id">
        <app-contact
          :contact="contact"
          @select-contact="handleSelectContact($event)"
        />
        <hr
          class="divider"
          :class="contact.active ? 'border-gray-400' : 'mx-3 border-gray-600'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SidebarHeader from "./SidebarHeader";
import Contact from "./Contact";

export default {
  components: {
    appSidebarHeader: SidebarHeader,
    appContact: Contact
  },
  data() {
    return {
      contacts: [
        {
          _id: "1",
          name: "john",
          status: "I'm the best",
          photo: "dog1.webp",
          lastSaw: new Date(),
          active: false
        },
        {
          _id: "2",
          name: "marie",
          status: "No, I'm the best",
          photo: "dog2.webp",
          lastSaw: new Date(),
          active: false
        },
        {
          _id: "3",
          name: "peter",
          status: "Yes we are the best",
          photo: "dog3.webp",
          lastSaw: new Date(),
          active: false
        },
        {
          _id: "4",
          name: "peter",
          status: "Yes we are the best",
          photo: "dog3.webp",
          lastSaw: new Date(),
          active: false
        },
        {
          _id: "5",
          name: "peter",
          status: "Yes we are the best",
          photo: "dog3.webp",
          lastSaw: new Date(),
          active: false
        }
      ]
    };
  },
  methods: {
    handleSelectContact(ev) {
      this.contacts = this.contacts.map(contact => {
        contact.active = contact._id === ev._id;

        return contact;
      });

      this.$store.dispatch("setCurrentConversation", ev);
    }
  },
  mounted() {
    // Marca a primeira conversa como padrão
    this.contacts[0].active = true;
  }
};
</script>

<style lang="scss" scoped>
.divider {
  transition: margin 0.4s;
}
</style>
