import sk1 from "../assets/images/skanaus1.png";
import sk2 from "../assets/images/skanaus2.png";
import sk3 from "../assets/images/skanaus3.png";
import sk4 from "../assets/images/skanaus4.png";
import sk5 from "../assets/images/skanaus5.png";

import me1 from "../assets/images/mobile-eu1.png";
import me2 from "../assets/images/mobile-eu2.png";
import me3 from "../assets/images/mobile-eu3.png";

import dm1 from "../assets/images/dealmate1.png";
import dm2 from "../assets/images/dealmate2.png";
import dm3 from "../assets/images/dealmate3.png";

export const projectsData = {
  "skanaus": {
    title: "Design of the food recipe blog „Skanaus!“",
    categories: ["web design", "blog"],
    descriptions: [
      "This project involved creating a convenient and visually appealing recipe website design for food enthusiasts and homemakers. The website features a modern layout.",
      "The main focus is on the content of the recipes. White dominates as the background color, giving space to the elements. Contrast is created with black fonts that are easy to read and accent colors such as red and green. Hierarchy is ensured by using fonts of different sizes and weights: the most important texts are larger and bolder, while additional descriptions are smaller. Photos take up a significant amount of space to immediately grab the user's attention.",
    ],
    images: [sk1, sk2, sk3, sk4, sk5],
  },

  "mobile-eu": {
    title: "Online store for mobile phones and accessories",
    categories: ["web programming", "e-shop"],
    descriptions: [
      "An online store for selling mobile phones and accessories was created. The website includes customer and administrator environments, ensuring a smooth user experience.",
      "The system is based on PHP server logic and a MariaDB database, which stores information about products, users, shopping carts, and orders. The data structure is designed to ensure fast query execution and product search. The system supports separate client and administrator environments: the administrator can manage goods, categories, and orders, while the client side implements dynamic product display, filtering, and shopping cart functionality.",
    ],
    images: [me1, me2, me3],
  },

  "dealmate": {
    title: "Design of the discount app „Dealmate“",
    categories: ["UX/UI design", "app", "wireframes"],
    descriptions: [
      "This project is one of my first works in mobile app design. I created an intuitive discount app design for convenient shopping.",
      "The design reflects the emphasis on user experience in the Human-Computer Interaction (HCI) course. The content is presented in a card format, which allows for easy viewing of information. The division of functions into categories and a logical menu help users to quickly complete tasks. The green color symbolizes ecology, economy, and financial benefits, which corresponds to the app's concept of discounts and loyalty cards. Contrasting accent colors are used to emphasize the hierarchy of information.",
    ],
    images: [dm1, dm2, dm3],
  },
};