const recommendations = {
  beach: {
    items: [
      {
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        description: "Maldives - Crystal clear waters and white sand."
      },
      {
        image: "https://mia.vn/media/uploads/blog-du-lich/bai-bien-my-khe-da-nang-lang-nguoi-ngam-nhin-1-trong-6-bai-bien-dep-nhat-hanh-tinh-01-1636298582.jpeg",
        description: "My Khe Beach in Da Nang with its beautiful and majestic natural landscape was once voted by Forbes - America's leading economic magazine - as one of the Top 6 most attractive beaches on the planet."
      }
    ]
  },
  temple: {
    items: [
      {
        image: "https://mia.vn/media/uploads/blog-du-lich/doi-net-1707439869.jpg",
        description: "Sensoji Temple is a place where you can take in that good old Edo atmosphere. It is a must-see spot when visiting Tokyo."
      },
      {
        image: "https://danangfantasticity.com/wp-content/uploads/2019/09/chua-linh-ung-chon-binh-yen-giua-long-da-nang-013-2.jpg",
        description: "Linh Ung Temple - Bai But has been well-known as the favourite spiritual spot of Buddists, domestic and international tourists to Danang."
      }
    ]
  },
  canada: {
    items: [
      {
        image: "https://cdn.authentik.com/canada/tr:w-2280,h-1000,cm-pad_resize,bg-blurred/uploads/images/orig/dec_toronto/1-toronto-downtown-skyline-1000x600jpeg.jpg",
        description: "Toronto is the largest city in Canada. It is also known as the “Queen City”. Dynamic, cosmopolitan, exciting and international, Toronto is made up of six formerly separate municipalities, each with its own distinct history and identity."
      },
      {
        image: "https://img.traveltriangle.com/blog/wp-content/uploads/2020/01/Things-To-Do-In-Victoria_15th-jan.jpg",
        description: "The majestic city of Victoria is the capital city of British Columbia, Canada."
      }
    ]
  }
};

function searchDestination() {
  const input = document.getElementById("searchInput").value.trim().toLowerCase();
  const recommendDiv = document.querySelector(".recommend");

  if (input === "") {
    recommendDiv.style.display = "none";
    recommendDiv.innerHTML = "";
    return;
  }

  let key = "";
  if (input.includes("beach")) key = "beach";
  else if (input.includes("temple")) key = "temple";
  else if (input.includes("canada")) key = "canada";

  if (key && recommendations[key]) {
    const data = recommendations[key];
    let html = `<div class="recommend-grid">`;

    data.items.forEach(item => {
      html += `
        <div class="card">
          <img src="${item.image}" alt="">
          <p>${item.description}</p>
          <button>Visit</button>
        </div>
      `;
    });

    html += `</div>`;
    recommendDiv.innerHTML = html;
    recommendDiv.style.display = "block";
  } else {
    recommendDiv.innerHTML = `<p>No matching recommendations found.</p>`;
    recommendDiv.style.display = "block";
  }
}

function clearSearch() {
  document.getElementById("searchInput").value = "";
  const recommendDiv = document.querySelector(".recommend");
  recommendDiv.style.display = "none";
  recommendDiv.innerHTML = "";
}
