'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Reviews', [
      {
        userId: 2,
        spotId: 1,
        review: "Unbelievably immaculate Cottage! I felt like a princess for two days while I got to work lol and the host was amazing! They made sure everything was perfect! We had a family member in icu and she even helped us by allowing early check in! Highly recommended and we will return! Thank you:)",
        rating: 5,
      },
      {
        userId: 3,
        spotId: 1,
        review: "Fabulous house! Amazing kitchen that was well stocked with just the right amenities. Would highly recommend this place to someone looking for a unique, clean and fun place to work in Bozeman!",
        rating: 5,
      },
      {
        userId: 4,
        spotId: 1,
        review: "This house is fresh, modern, and clean. Close to good coffee and food. Perfect with you want to get away from your desk for a while. Great little neighborhood to stroll around. Lots of fun amenities to keep you comfortable. A perfect place to work remotely",
        rating: 4,
      },{
        userId: 5,
        spotId: 2,
        review: "Fantastic location for exploring Savannah and getting some work done! You are offered great recommendations for things to do, places to eat, and parking. The condo has everything you need for a stay, and is beautifully decorated. Will come back to work here again.",
        rating: 5,
      },{
        userId: 6,
        spotId: 2,
        review: "The host was responsive to our questions and stayed in touch with us throughout our stay to make sure everything was going well! They had a genuine and sincere interest in project and wanted to make sure our working environment was perfect. We greatly appreciated it!",
        rating: 5,
      },{
        userId: 7,
        spotId: 2,
        review: "The condo was exactly as pictured, very nice! Perfect location, we were able to walk to almost everything after a long coding session. Chere thought of everything and then some. Her recommendations were very helpful. We had a wonderful trip/work session!",
        rating: 5,
      },{
        userId: 8,
        spotId: 2,
        review: "We loved the location in the historic district of Savannah! Cute condo and plenty of room for the three of us to work comfortable! Would highly recommend checking this spot out.",
        rating: 5,
      },{
        userId: 7,
        spotId: 3,
        review: "LOVED working from here!! The internet is great. Would recommend.",
        rating: 5,
      },{
        userId: 12,
        spotId: 3,
        review: "Perfect for my App Academy cohort reunion! This place had so much to offer though we spent the majority of the time lounging by the pool taking pictures. The view for sunset was incredible. It was a little out of the way but still close enough to downtown so all my friends made their flights :). Would stay again and would recommend to anyone. Some of us wanted to hop online on trip and got some work in. A WONDERFUL place to work remote",
        rating: 5,
      },{
        userId: 11,
        spotId: 4,
        review: "Great lofted apartment in Brooklyn. Photos are very accurate and the location is very convenient for going afk for a while. Our entire group didn't have a problem connecting to the WiFi, and got some great work in. Definitely checkout this spot.",
        rating: 5,
      },{
        userId: 2,
        spotId: 4,
        review: "this place is beautiful! super close to manhattan and close to a lot of stores in brooklyn! it was the perfect location for getting to our convention/ hackathon! Didn't know it was a 4 floor walk up but we got our workouts in!.",
        rating: 5,
      },{
        userId: 1,
        spotId: 4,
        review: "The apartment was nice and had all amenities that we needed for a great work session. The owner responded quickly. It was a bit of a hike up 4 flights of stairs, and the location wasn't as close to bars and restaurants as we would have liked, but maybe that was a good thing for our deadline.",
        rating: 5,
      },{
        userId: 12,
        spotId: 4,
        review: "The apartment is conveniently located near the subway. Complex is a little outdated but cute. Didn't affect our remote work at all. Lots of restaurants and shops near by. I would visit this spot again.",
        rating: 4,
      },{
        userId: 3,
        spotId: 5,
        review: "Had a great work session at the cabin!! Would definitely recommend for anyone visiting rapid city or the black hills!!",
        rating: 5,
      },{
        userId: 9,
        spotId: 5,
        review: "I loved working here!! Amazing house the pictures are an exact representation. Amenities were wonderful we barely wanted to leave the house! Will definitely come back to work from here again!",
        rating: 5,
      },{
        userId: 12,
        spotId: 6,
        review: "Great place to stay if you would like to work in the area. House was clean and the pool table was a great addition. Host was quickly responsive.",
        rating: 5,
      },{
        userId: 4,
        spotId: 6,
        review: "The Remotebnb is gorgeous and relatively easy to find! The photos do not capture the amazingness this place has to offer. We came after my hackathon and even with us being loud, once we moved inside the door contained our loudest friends and was the best stay. Would love to work here again.",
        rating: 5,
      },{
        userId: 5,
        spotId: 6,
        review: "Beautiful views in a house that has everything our group would want to do, from a fire or in the hot tub or a movie or a game of pool, very accommodating. You HAVE to try this spot and work remotely here.",
        rating: 5,
      },{
        userId: 7,
        spotId: 6,
        review: "Very clean and beautiful house. Loved the location and enjoyed all aspects of the house. Strongly recommend this place if you are in the area and in need a space to work.",
        rating: 5,
      },{
        userId: 12,
        spotId: 7,
        review: "Amazing house with amazing views! Everything was as described plus more, we really enjoying working on our projects here. The small details like the welcome notes, wardrobe full of board games, game room stocked with classic timeless movies, exquisite modern (but classy) decoration, and plenty more made this house much better than others in the area! I highly recommend this this to anyone wanting a relaxing mountain scenery while you work on your capstone project.",
        rating: 4,
      },{
        userId: 10,
        spotId: 7,
        review: "It was a great place to work. Just as described on the website. We will definitely be back again.",
        rating: 5,
      },{
        userId: 3,
        spotId: 8,
        review: "Loved it! And fantastic customer service! AMAZING internet speed. The perfect place to work.",
        rating: 5,
      },{
        userId: 6,
        spotId: 9,
        review: "Very accommodating. Great location. Amazing house. Would recommend to others and will be staying here again. P.s. outdoor hot tub is as advertised! This location is a must stay if you want to relax after a long day's work.",
        rating: 5,
      },{
        userId: 3,
        spotId: 9,
        review: "This house is an absolute dream. It's even better than the pictures, so comfy and a great fit for big groups with a lot of time to spend inside. We all met our deadlines, and made huge progress on our projects. Would definitely book again.",
        rating: 5,
      },{
        userId: 2,
        spotId: 10,
        review: "WE LOVED WORKING FROM HERE!! The internet was fast, and we were able to focus really well. Would recommend that you checkout this spot.",
        rating: 5,
      },{
        userId: 2,
        spotId: 11,
        review: "Staying at the yurt was truly amazing! We were skeptical about the internet connection, but it worked!! The location could not have been better. You are surrounded by a 360 degree view of mountains and its a great way to focus! Not to mention the breathtaking night sky. We thought up our next app while at this spot. The yurt was spacious, clean, and cozy. Also, very useful supplies provided! Further, the host is an amazing host! They gave very clear and easy to follow directions to get to the property. They are very quick to respond to any inquiries/questions. 1000/10 would recommended. Will for sure be coming back!",
        rating: 4,
      },{
        userId: 3,
        spotId: 11,
        review: "The yurt was the PERFECT stay while visiting/working in Big Bend! It was surrounded by the beautiful mountains and we had the chance to stargaze on our last night there which was unbelievable. The host was extremely knowledgeable about what was around us and what to see when getting to big bend. They are also a software developer, so they understand our needs. I would definitely stay here again and recommend others to stay here if they get the chance.",
        rating: 5,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Reviews', null, {});
  }
};
