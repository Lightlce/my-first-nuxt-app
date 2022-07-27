<template>
  <div
    class="mx-4 mt-[48px]"
  >
    <section class="px-[24px] sm:px-0">
      <h1
        class="text-[32px] leading-[40px] sm:text-[48px] sm:leading-[64px] font-bold mb-[4px] text-[#0B0C0F]"
      >
        Happenings
      </h1>
      <p class="text-[16px] leading-[24px] text-[#21252C]">
        Stay in the know about the latest happenings & buzz in church!
      </p>
    </section>

    <section class="sm:mt-[56px] mt-[24px]">
      <h1 class="font-bold text-xl px-[24px] sm:px-0">Upcoming events</h1>

      <div class="mt-4 md:flex md:flex-wrap max-w-[900px]">
        <CardTile
          v-for="(item, i) in weeklyEvents"
          :key="i"
          class="desktop-slide flex-1 border-[0px] rounded-lg drop-shadow-tile relative mt-6 md:mr-3 lg:mr-6 w-[240px]"
          cornerTextClass="text-xs lg:text-[16px] sm:px-[12px] font-semibold leading-[20px]"
          :imageSrc="item.imageSrc"
          :cornerText="item.cornerText"
          text-wrapper-class="text-left pt-[20px] px-[20px] pb-[72px]"
        >
          <h1 class="text-md font-bold sm:text-[20px] sm:leading-[24px]">
            {{ item.title }}
          </h1>

          <p
            class="pt-[8px] pb-[12px] text-md leading-6 sm:leading-[24px] whitespace-pre-line mb-auto"
          >
            {{ item.body }}
          </p>

          <a
            v-if="item.isExternal"
            :href="item.to"
            target="_blank"
          
          >
            <BaseButton
              class="absolute bottom-[20px]"
              solid-classes="bg-[#6245F4] text-white text-xs border-0 hover:bg-[#3B4CEF] sm:text-[16px] sm:leading-[24px]"
            >
              {{ item.buttonText }}
            </BaseButton>
          </a>

          <nuxt-link v-else :to="item.to">
            <BaseButton
              class="absolute bottom-[20px]"
              solid-classes="bg-[#6245F4] text-white text-xs border-0 hover:bg-[#3B4CEF] sm:text-[16px] sm:leading-[24px]"
            >
              {{ item.buttonText }}
            </BaseButton>
          </nuxt-link>
        </CardTile>
      </div>
    </section>
  </div>
</template>

<script>
import BaseButton from '../components/BaseButton.vue'
import CardTile from '../components/CardTile.vue'

export default {
  components: {
    CardTile,
    BaseButton,
  },

  data () {
    return {
      upcomingEvents: [
      ],
      weeklyEvents: [
        {
          imageSrc: require('~/assets/images/happenings/heartkidz.png'),
          title: "Children's Church Registration",
          body: 'Every Sat 5-7pm & Sun 1.30-3.30pm',
          buttonText: 'Find out more',
          to: 'happenings/test',
          isExternal: true,
        },
        {
          imageSrc: require('~/assets/images/happenings/service-replay.png'),
          title: 'Service Replay',
          body: `No FOMO!
          Sun 1.30pm - 3.30pm`,
          buttonText: 'Find out more',
          to: 'happenings/test',
          maxPastoralStatus: 3,
          isExternal: true,
        },
        {
          imageSrc: require('~/assets/images/happenings/service-replay.png'),
          title: 'Service Replay',
          body: `No FOMO!
          Sun 1.30pm - 3.30pm`,
          buttonText: 'Find out more',
          to: 'https://one-page.heartofgodchurch.org/videos',
          minPastoralStatus: 4,
          isExternal: true,
        },
        {
          imageSrc: require('~/assets/images/happenings/youth-connect.jpg'),
          title: 'Connect a Youth',
          body: 'Bringing a youth? Let us know! We’re here to help!',
          buttonText: 'Find out more',
          to: 'happenings/test',
          minPastoralStatus: 4,
          isExternal: true,
        },
        {
          imageSrc: require('~/assets/images/happenings/youth-involvement.jpg'),
          title: 'Get Involved',
          body: 'We need youth & we need YOU! Let’s reach down!',
          buttonText: 'Find out more',
          to: 'happenings/test',
          minPastoralStatus: 4,
          isExternal: true,
        },
        {
          imageSrc: require('~/assets/images/happenings/hogc21.png'),
          title: 'HOGC21 Ideas',
          body: 'Want to do something but not sure how? Fret not!',
          buttonText: 'Find out more',
          to: 'happenings/test',
          minPastoralStatus: 4,
          isExternal: true,
        },
        {
          imageSrc: require('~/assets/images/happenings/youthevents.jpg'),
          title: 'Youth Events',
          body: 'Calling all who are young at heart!',
          buttonText: 'Find out more',
          to: 'happenings/test',
          minPastoralStatus: 4,
          isExternal: true,
          dataEventTracking: 'youth-events-interest-form',
        },
      ],
    }
  },

}
</script>

