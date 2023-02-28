<template>
  <footer id="footer">
    <div id="footer__backToTop">
      <span id="btn__icon" class="material-icons" @click="scrollToTop">
        {{ icon }}
      </span>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Stores
import parentStore, { childStores } from "@/store";

export default defineComponent({
  name: "footer-component",
  computed: {
    icon(): string {
      return this.storeFooter.getTextualData.icons.backToTop;
    },
  },
  methods: {
    scrollToTop(): void {
      this.$emit("scrollToTop");
    },
  },
  setup() {
    const storeCommon = parentStore();
    const storeFooter = childStores.useFooterStore();
    return { storeCommon, storeFooter };
  },
  async created() {
    // Get firestore footer document
    const footerTextualData = await this.storeCommon.getFirestoreDocument("footer");

    // Store textual data
    this.storeFooter.setTextualData(footerTextualData);
  },
});
</script>

<style scoped lang="scss">
@use "@/styles/all/colors";
@use "@/styles/all/spacing";
@use "@/styles/all/backgrounds";
@use "/src/styles/all/transitions";

#footer {
  background-color: colors.$tint-secondary-20-hex;
  //border: 2px solid blue;
  display: flex;
  flex-direction: column;
  padding: spacing.$padding_pixel_footer;
  position: relative;

  #footer__backToTop {
    position: absolute;
    outline: 2px solid white;
    background-color: backgrounds.$background-color-dark-btn-to-top;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    top: 0;
    left: 50%;
    cursor: pointer;
    transform: translate3d(-50%, -50%, 0);
    transition: all 0.3s ease-in-out;

    &:hover {
      #btn__icon {
        animation-name: bounce;
        animation-iteration-count: infinite;
        animation-duration: 1s;
      }
    }

    #btn__icon {
      //outline: 2px solid yellow;
      transition: all 0.3s ease-in-out;
    }
  }

  #footer__top {
    border: 2px solid orange;
    display: flex;
    justify-content: space-between;
  }

  #footer__middle {
    border: 2px solid red;
    display: flex;
  }

  #footer__bottom {
    border: 2px solid green;
  }
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-10%);
  }
  50% {
    transform: translateY(10%);
  }
  100% {
    transform: translateY(0%);
  }
}
</style>
