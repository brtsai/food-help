{
  entities: {
    businesses: {
      id: 4815,
      name: "BREWERUNKNOWN'S GASTROPUB",
      latitude: 25.9861,
      longitude: 80.3036,
    },
    users: {
      1: {
        id: 1,
        username: "tofugeki_no_soma",
        imageUrl: "https://commons.wikimedia.org/wiki/File:Shokugeki_no_SOMA.jpg",
        city: "Tokyo",
        state: "Tokyo",
      },
      20062018: {
        id: 20062018,
        username: "reeses_with_a_spoon",
        imageUrl: "https://cdn.pixabay.com/photo/2017/04/04/17/03/chocolate-2202109_1280.jpg",
        city: "New Orleans",
        state: "Louisiana"
      }
    },
    reviews: {
      49: {
        id: 49,
        user: 1,
        business: 4815,
        rating: 3.5,
        review: "I just want to eat food created by all sorts of chefs...and compete with them. The more people there are who make things completely different from my dish, the more fun it gets.",
      },
      2022: {
        id: 2022,
        user: 20062018,
        business: 4815,
        rating: 5.0,
        review: "Chef Tom Clancy's Rainbow 6 Fish Roll is a definite must have for any diehard Fresh Plump Sushi roll fans",
      }
    }
  }
  session: {
    id: 57,
    username: "zac_saffron_87",
    imageUrl: "https://en.wikipedia.org/wiki/File:Rickroll%27D.jpg", 
    city: "Salt Lake City",
    state: "Utah",
  },
  ui: {
    loading: true/false
  },
  errors: {
    login: ["Incorrect username/password combination"],
    reviewForm: ["Review body cannot be blank"],
  }
}
