const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchEvents = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    // Додаємо стабільну картинку з picsum.photos
    const updatedData = data.map((item) => ({
      id: item.id,
      title: item.title,
      date: generateRandomDate(),
      imageUrl: `https://picsum.photos/400/200?random=${item.id}`, // Тут головне
    }));

    return updatedData;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

const generateRandomDate = () => {
  const start = new Date();
  const end = new Date(
    start.getTime() + Math.random() * 10 * 24 * 60 * 60 * 1000
  );
  return (
    end.toLocaleDateString("en-GB") +
    " " +
    end.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );
};
