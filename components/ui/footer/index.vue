<template>
  <div>
    <UiFooterCallToAction/>
    <UiFooterMain :columns="columns"/>
    <UiFooterCopyright/>
  </div>
</template>

<script setup lang="ts">
  const columns = ref([
    {
      title: 'Categoriëen',
      navItems: [
        {
          text: "Pizza's",
          url: '/pizzas',
        },
        {
          text: "Meltzz",
          url: '/meltzz',
        },
        {
          text: "Bijgerechten",
          url: '/bijgerechten',
        },
        {
          text: "Drankjes",
          url: '/drankjes',
        },
        {
          text: "Aanbiedingen",
          url: '/aanbiedingen',
        }
      ]
    },
    {
      title: 'Populair',
      navItems: [
        {
          text: "Pizza Pepperoni",
          url: '/pizza-pepperoni',
        },
        {
          text: "Pizza Shoarma",
          url: '/pizza-shoarma',
        },
        {
          text: "Chicken Sharebox",
          url: '/chicken-sharebox',
        },
      ]
    },
    {
      title: 'Winkels',
      navItems: [
        {
          text: "Domino’s Amsterdam",
          url: '/dominos-amsterdam',
        },
        {
          text: "Domino’s Groningen",
          url: '/dominos-groningen',
        },
        {
          text: "Domino’s Rotterdam",
          url: '/dominos-rotterdam',
        },
        {
          text: "Domino’s Den Haag",
          url: '/dominos-den-haag',
        },
        {
          text: "Domino’s Eindhoven",
          url: '/dominos-eindhoven',
        },
        {
          text: "Alle vestigingen",
          url: '/alle-vestigingen',
        }
      ]
    },
    {
      title: 'Overig',
      navItems: [
        {
          text: "Vacatures",
          url: '/vacatures',
        },
        {
          text: "Openingstijden",
          url: '/openingstijden',
        },
        {
          text: "Over ons",
          url: '/over-ons',
        },
        {
          text: "Contact",
          url: '/contact',
        }
      ]
    }
  ])
</script>
