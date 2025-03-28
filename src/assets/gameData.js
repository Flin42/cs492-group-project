// src/gameData.js (Example Data)

export const gameQuestions = [
	{
	  id: 1,
	  question: "Which path looks safest?",
	  image: "/images/path-choice.jpg", // Path relative to the 'public' folder
	  options: [
		{ id: 'a', text: "The dark cave", outcome: "You enter the cave... it's damp and echoing. You hear a low growl." },
		{ id: 'b', text: "The sunny meadow", outcome: "You step into the meadow. Butterflies flutter by, but you see large paw prints in the mud." },
		{ id: 'c', text: "The rickety bridge", outcome: "You cautiously step onto the bridge. It creaks ominously under your weight." }
	  ]
	},
	{
	  id: 2,
	  question: "You find a strange glowing mushroom. What do you do?",
	  image: "/images/glowing-mushroom.jpg", // Path relative to the 'public' folder
	  options: [
		{ id: 'a', text: "Eat it immediately", outcome: "Your vision blurs with vibrant colors! You feel strangely energetic, but also slightly nauseous." },
		{ id: 'b', text: "Poke it with a stick", outcome: "Sparks fly off the mushroom, and the stick disintegrates slightly. Probably shouldn't eat it." },
		{ id: 'c', text: "Carefully collect it", outcome: "You gently place it in your bag. It emits a soft, warm light." }
	  ]
	},
	{
	  id: 3,
	  question: "A mysterious figure offers you a drink. Accept?",
	  image: "/images/mysterious-figure.jpg", // Path relative to the 'public' folder
	  options: [
		{ id: 'a', text: "Politely decline", outcome: "The figure nods slowly and fades back into the shadows, leaving you alone." },
		{ id: 'b', text: "Ask what's in it", outcome: "'Just a local specialty,' the figure rasps, swirling the cloudy liquid." },
		{ id: 'c', text: "Gulp it down", outcome: "It tastes like bitter almonds and static electricity. You feel a strange tingling sensation spread through your body." }
	  ]
	},
	// Add more questions here...
  ];