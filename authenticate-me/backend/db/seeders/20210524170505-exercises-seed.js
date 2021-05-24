'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert('Exercises', [
        {user_id: 1,
        name: "Bench Press",
        description: "Lie flat on your back on a bench with a slight arch in your lower back. Keep both feet planted on the floor to help drive the bar upwards. Grip the bar with hands just wider than shoulder-width apart. Make sure your elbows are at a 45-degree angle to your torso. Whenever you're ready, tighten your core and initiate the movement. Ideally, the bar should tightly touch your chest and then immediately travel upwards. The bar path should be completely straight. Sets/reps may vary depending on your goals. The sets/reps that are provided serve as a foundation that can be easily adjustable to your workout program.",
        sets: 4,
        reps: 8,
        body_region_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {user_id: 1,
      name: "Incline Bench Press",
      description:"This exercise is similar to how a bench press is set up. Lie flat on your back on a bench with a slight arch in your lower back. Keep both feet planted on the floor to help drive the bar upwards. Grip the bar with hands just wider than shoulder-width apart. Make sure your elbows are at a 45-degree angle to your torso. Whenever you're ready, tighten your core and initiate the movement. Ideally, the bar should tightly touch your chest and then immediately travel upwards. The bar path should be completely straight. Sets/reps may vary depending on your goals. The sets/reps that are provided serve as a foundation that can be easily adjustable to your workout program ",
      sets:4,
      reps: 8,
      body_region_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {user_id: 1,
      name: "Dumbell Shoulder Press",
      description:"Pick an appropriate weight for this movement. Hold the dumbbells by your shoulders with your palm facing forwards. Your elbows should be out at the sides and bent at a 45-70 degree angle. Without arching your back, extend through your elbows and push the weights above your head. Be careful not to let the weights clash with each other at the top. Slowly return to the starting position and start again.",
      sets:4,
      reps:10,
      body_region_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {user_id: 1,
      name: "Bicep curls",
      description:"Grab a dumbbell or utilize a cable machine. Stand up tall with the weight in hand. At the bottom position, the arm should be relaxed and straight with palms facing forward. While keeping the shoulders relaxed and upper arm stable, bend at the elbow and lift the weight towards your shoulder. Elbows should be tucked in and close to your torso. Slow and steady is the goal here. On the way down, keep an eccentric hold for about 3 seconds. I would recommend sticking to 10-15 lbs since you'll be doing a lot of reps in this workout.",
      sets:3,
      reps: 15,
      body_region_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {user_id: 1,
      name: "Tricep Cable Extensions",
      description:"Grab a tricep rope and firmly grasp it with both of your hands. At the starting position, your elbows should be bent towards your shoulders. Pull the rope to your torso until you fully straighten out your elbows. Pause at the bottom and slowly come up to resting position",
      sets:3,
      reps: 15,
      body_region_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {user_id: 1,
      name: "Barbell Squat",
      description:"Place the bar on your traps. Make sure it is firmly placed and balanced across your back. With feet hip-width apart while keeping your core tight and back straight, lower down as if you're sitting in an invisible chair. Straighten your legs to ascend back up.",
      sets:4,
      reps: 8,
      body_region_id: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {user_id: 1,
      name: "Romanian Deadlifts",
      description:"You can do this exercise with either dumbbells or a barbell. With barbells, grab the bar shoulder-width apart. With dumbbells, hold the weights in front of your hip. As you descend, bend your hips backwards. You should feel a nice full stretch of the hamstrings as you glide the weight across the legs. Once you feel the max stretch on your hammies, push your hips forward and ascend, keeping the back straight.",
      sets:4,
      reps: 8,
      body_region_id: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {user_id: 1,
      name: "Ab Rollouts",
      description:"This workout utilizes an ab roller. With your knees on a mat and hands on your roller, keeping the core tight, slowly roll out without having your stomach touch the floor. And then squeeze your stomach as you're coming back up.",
      sets:4,
      reps:12,
      body_region_id: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete('Exercises', null, {});
  }
};
