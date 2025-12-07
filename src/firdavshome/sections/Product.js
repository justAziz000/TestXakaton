const products = {
    cats: [
        { id: 1, name: "Whiskas Cat Food", price: 25, category: "Food", image: "https://images.unsplash.com/photo-1601758173925-7b5b5e6b564b?auto=format&fit=crop&w=300&q=80" },
        { id: 2, name: "Cat Scratching Post", price: 45, category: "Accessories", image: "https://images.unsplash.com/photo-1592194996308-7b6f19f1a4ed?auto=format&fit=crop&w=300&q=80" },
        { id: 3, name: "Cat Litter", price: 15, category: "Hygiene", image: "https://images.unsplash.com/photo-1603312673131-0e462b1d0e46?auto=format&fit=crop&w=300&q=80" },
        { id: 4, name: "Cat Toy Ball", price: 10, category: "Toys", image: "https://images.unsplash.com/photo-1603398938378-d8ec50f96d69?auto=format&fit=crop&w=300&q=80" },
        { id: 5, name: "Cat Bed", price: 50, category: "Furniture", image: "https://images.unsplash.com/photo-1602810318626-2d0f5f9e212c?auto=format&fit=crop&w=300&q=80" },
        { id: 6, name: "Cat Collar", price: 12, category: "Accessories", image: "https://images.unsplash.com/photo-1613844142933-5bbca8aa0d42?auto=format&fit=crop&w=300&q=80" },
        { id: 7, name: "Cat Treats", price: 8, category: "Food", image: "https://images.unsplash.com/photo-1608897013036-c5b4a73b1a2e?auto=format&fit=crop&w=300&q=80" },
        { id: 8, name: "Cat Shampoo", price: 18, category: "Hygiene", image: "https://images.unsplash.com/photo-1592194996308-7b6f19f1a4ed?auto=format&fit=crop&w=300&q=80" },
        { id: 9, name: "Cat Carrier Bag", price: 60, category: "Accessories", image: "https://images.unsplash.com/photo-1603786357428-891c4f7d2b0e?auto=format&fit=crop&w=300&q=80" },
        { id: 10, name: "Interactive Laser Toy", price: 20, category: "Toys", image: "https://images.unsplash.com/photo-1592194996308-7b6f19f1a4ed?auto=format&fit=crop&w=300&q=80" },
      ],
      
      
    
    dogs: [
      { id: 1, name: "Dog Food - Beef", price: 30, category: "Food", image: "dog_food_beef.jpg" },
      { id: 2, name: "Dog Leash", price: 15, category: "Accessories", image: "dog_leash.jpg" },
      { id: 3, name: "Dog Collar", price: 12, category: "Accessories", image: "dog_collar.jpg" },
      { id: 4, name: "Dog Bed", price: 55, category: "Furniture", image: "dog_bed.jpg" },
      { id: 5, name: "Chew Toy", price: 10, category: "Toys", image: "dog_chew_toy.jpg" },
      { id: 6, name: "Dog Shampoo", price: 20, category: "Hygiene", image: "dog_shampoo.jpg" },
      { id: 7, name: "Dog Treats", price: 15, category: "Food", image: "dog_treats.jpg" },
      { id: 8, name: "Dog Harness", price: 25, category: "Accessories", image: "dog_harness.jpg" },
      { id: 9, name: "Travel Water Bottle", price: 18, category: "Accessories", image: "dog_water_bottle.jpg" },
      { id: 10, name: "Dog Jacket", price: 35, category: "Clothes", image: "dog_jacket.jpg" },
    ],
  
    smallPets: [
      { id: 1, name: "Hamster Cage", price: 40, category: "Housing", image: "hamster_cage.jpg" },
      { id: 2, name: "Hamster Food", price: 8, category: "Food", image: "hamster_food.jpg" },
      { id: 3, name: "Chew Stick", price: 5, category: "Toys", image: "chew_stick.jpg" },
      { id: 4, name: "Exercise Wheel", price: 15, category: "Toys", image: "exercise_wheel.jpg" },
      { id: 5, name: "Bedding Material", price: 12, category: "Hygiene", image: "bedding_material.jpg" },
      { id: 6, name: "Small Pet Water Bottle", price: 10, category: "Accessories", image: "small_pet_water_bottle.jpg" },
      { id: 7, name: "Rabbit Food", price: 18, category: "Food", image: "rabbit_food.jpg" },
      { id: 8, name: "Guinea Pig Hideout", price: 22, category: "Housing", image: "guinea_hideout.jpg" },
      { id: 9, name: "Small Pet Toys Pack", price: 12, category: "Toys", image: "small_pet_toys.jpg" },
      { id: 10, name: "Vitamin Supplement", price: 14, category: "Health", image: "small_pet_vitamins.jpg" },
    ],
  
    fish: [
      { id: 1, name: "Aquarium Tank 20L", price: 50, category: "Tank", image: "aquarium_20l.jpg" },
      { id: 2, name: "Fish Food Flakes", price: 10, category: "Food", image: "fish_food_flakes.jpg" },
      { id: 3, name: "Water Conditioner", price: 12, category: "Accessories", image: "water_conditioner.jpg" },
      { id: 4, name: "Aquarium Filter", price: 35, category: "Accessories", image: "aquarium_filter.jpg" },
      { id: 5, name: "Aquarium Heater", price: 25, category: "Accessories", image: "aquarium_heater.jpg" },
      { id: 6, name: "Decorative Plants", price: 15, category: "Decoration", image: "decorative_plants.jpg" },
      { id: 7, name: "Fish Net", price: 8, category: "Accessories", image: "fish_net.jpg" },
      { id: 8, name: "Gravel Substrate", price: 20, category: "Decoration", image: "gravel_substrate.jpg" },
      { id: 9, name: "Air Pump", price: 18, category: "Accessories", image: "air_pump.jpg" },
      { id: 10, name: "LED Aquarium Light", price: 30, category: "Accessories", image: "led_light.jpg" },
    ],
  
    birds: [
      { id: 1, name: "Bird Cage Large", price: 60, category: "Housing", image: "bird_cage_large.jpg" },
      { id: 2, name: "Bird Seed Mix", price: 12, category: "Food", image: "bird_seed.jpg" },
      { id: 3, name: "Bird Bath", price: 20, category: "Accessories", image: "bird_bath.jpg" },
      { id: 4, name: "Bird Perch", price: 8, category: "Accessories", image: "bird_perch.jpg" },
      { id: 5, name: "Bird Toy Swing", price: 10, category: "Toys", image: "bird_toy_swing.jpg" },
      { id: 6, name: "Cuttlefish Bone", price: 5, category: "Accessories", image: "cuttlefish_bone.jpg" },
      { id: 7, name: "Bird Food Treats", price: 7, category: "Food", image: "bird_treats.jpg" },
      { id: 8, name: "Bird Cage Cover", price: 15, category: "Accessories", image: "bird_cage_cover.jpg" },
      { id: 9, name: "Bird Nesting Material", price: 10, category: "Accessories", image: "nesting_material.jpg" },
      { id: 10, name: "Bird Vitamin Supplement", price: 12, category: "Health", image: "bird_vitamins.jpg" },
    ]
  };
  
  export default products;
  