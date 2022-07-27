<template>
  <div
    class="mx-4 mt-[48px]"
  >
    <section class="px-[24px] sm:px-0">
      <h1
        class="text-[32px] leading-[40px] sm:text-[48px] sm:leading-[64px] font-bold mb-[4px] text-[#0B0C0F]"
      >
        Welcome to web training 3
      </h1>
    </section>

    <EventsCardVue :events="events"></EventsCardVue>

  </div>
</template>

<script>
import EventsCardVue from '../components/common/EventsCard.vue'

export default {
  components: {
    EventsCardVue

  },
  data () {
    return {
      events:[
        {
          Title: "Connect a youth",
          Body: "Bringing a youth? Let us know! We’re here to help!",
          Image: "Hello World",
        },{
          Title: "Connect a youth",
          Body: "Bringing a youth? Let us know! We’re here to help!",
          Image: "Hello World",
        }
      ],
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
          isExternal: true,
        },
        {
          imageSrc: require('~/assets/images/happenings/service-replay.png'),
          title: 'Service Replay',
          body: `No FOMO!
          Sun 1.30pm - 3.30pm`,
          buttonText: 'Find out more',
          to: 'https://one-page.heartofgodchurch.org/videos',
          isExternal: true,
        },
        {
          imageSrc: require('~/assets/images/happenings/youth-connect.jpg'),
          title: 'Connect a Youth',
          body: 'Bringing a youth? Let us know! We’re here to help!',
          buttonText: 'Find out more',
          to: 'happenings/test',
          isExternal: true,
        },
        {
          imageSrc: require('~/assets/images/happenings/youth-involvement.jpg'),
          title: 'Get Involved',
          body: 'We need youth & we need YOU! Let’s reach down!',
          buttonText: 'Find out more',
          to: 'happenings/test',
          isExternal: true,
        },
        {
          imageSrc: require('~/assets/images/happenings/hogc21.png'),
          title: 'HOGC21 Ideas',
          body: 'Want to do something but not sure how? Fret not!',
          buttonText: 'Find out more',
          to: 'happenings/test',
          isExternal: true,
        },
        {
          imageSrc: require('~/assets/images/happenings/youthevents.jpg'),
          title: 'Youth Events',
          body: 'Calling all who are young at heart!',
          buttonText: 'Find out more',
          to: 'happenings/test',
          isExternal: true,
          dataEventTracking: 'youth-events-interest-form',
        },
      ],
    }
  },

}
</script>

