$(document).ready(function () {
	$("#menu-bar").height(50)

	//#region --------------------------Slick--------------------------
	$('.single-item').slick({
		arrows: false, // Tắt nút điều hướng mặc định
		dots: false,
	});

	$(".prev").click(function () {
		$('#banner').find(".single-item").slick("slickPrev");
	});

	$(".next").click(function () {
		$('#banner').find(".single-item").slick("slickNext");
	});

	$('.product-cards').slick({
		dots: true,
		infinite: true,
		arrows: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		swipeToSlide: true, 
		responsive: [
			{
				breakpoint: 1024,
				settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true,
				arrows:false,
				}
			},
			{
				breakpoint: 600,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				arrows:false,
				},
			},
			{
				breakpoint: 480,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows:false,
				},
			}
		]
	});

	$('.centered-slide').slick({
		centerMode: true, // Bật chế độ center
		centerPadding: '60px', // Khoảng cách giữa các item
		slidesToShow: 3, // Số item hiển thị
		autoplay: true,
		swipeToSlide: true, 
		arrows: false,
		speed: 500,
		responsive: [
		  {
			breakpoint: 768,
			settings: {
				arrows: false,
				autoplay: true,
			  centerMode: true,
			  centerPadding: '40px',
			  slidesToShow: 1
			}
		  }
		]
	});

	$('.partner-slide').slick({
		variableWidth: true,
        autoplaySpeed: 0,
        speed: 15000,
        cssEase: 'linear',
		slidesToShow: 1,
		swipeToSlide: true, 
        slidesToScroll: 1,
		infinite: true,
		slidesToShow: 6,
		autoplay: true,
		slidesToScroll: 4,
		arrows:false,
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 4,
			  slidesToScroll: 3,
			  infinite: true,
			  dots: true
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 2
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  slidesToShow: 1,
				slidesToScroll: 1,
			}
		  }
		]
	});
	
	$('.related-post').slick({
		centerMode: true, // Bật chế độ center
		centerPadding: '60px', // Khoảng cách giữa các item
		slidesToShow: 3, // Số item hiển thị
		autoplay: true,
		swipeToSlide: true, 
		arrows: true,
		speed: 500,
		responsive: [
		  {
			breakpoint: 768,
			settings: {
				arrows: false,
				autoplay: true,
			  centerMode: true,
			  centerPadding: '40px',
			  slidesToShow: 1
			}
		  }
		]
	});
	//#endregion

	$("#menu-burger").click(function () {
		let menuBar = $("#menu-bar");
		if (menuBar.height() === 0) {
			menuBar.height(50); // Mở rộng
		} else {
			menuBar.height(0); // Thu gọn
		}
	});

	$(".open-menu").click(function () {
		let menuBar = $("#menu-side");
		let navMobile = $("#nav-mobile");
	
		if (menuBar.width() === 0) {
			menuBar.width("100vw"); // Mở rộng menu
		} else {
			menuBar.width(0); // Thu gọn menu
		}
	
		navMobile.toggleClass("d-none d-flex"); // Ẩn/hiện bằng cách thay đổi class
	});

	$("#mobile-search").click(function () {
		let searchBar = $("#mobile-search-bar");
		if (searchBar.height() === 0) {
			searchBar.height(50);
			searchBar.find("input").focus()
		} else {
			searchBar.height(0);
		}
	});
	

	let defaultGroup = $(".group-target").text();
	let defaultTitle = $(".title-target").text();
	let defaultDesc = $(".desc-target").text();

	$(".solution-product").hover(
		function () {
			let newGroup = $(this).attr("group");
			let newTitle = $(this).attr("title");
			let newDesc = $(this).attr("desc");

			$(".group-target, .title-target, .desc-target").addClass("fade");

			setTimeout(() => {
				$(".group-target").text(newGroup);
				$(".title-target").text(newTitle);
				$(".desc-target").text(newDesc);
				$(".group-target, .title-target, .desc-target").removeClass("fade");
			}, 300);
		},
		function () {
			// Khi rời chuột khỏi phần tử
			$(".group-target, .title-target, .desc-target").addClass("fade");

			setTimeout(() => {
				$(".group-target").text(defaultGroup);
				$(".title-target").text(defaultTitle);
				$(".desc-target").text(defaultDesc);
				$(".group-target, .title-target, .desc-target").removeClass("fade");
			}, 300);
		}
	);

	$(".collection-menu").mouseenter(function () {
		const key = $(this).attr("data-collection");
		document.querySelectorAll(".collection-menu").forEach(function (item) {
			item.setAttribute('class','collection-menu')
		  })
		$(this).addClass('bg-gray-200')
		const data = getData(key);
		$(".categories").html(renderCategories(data));
    });
	
});

//#region product
document.querySelectorAll('.btn-toggle').forEach(button => {
	let targetID = button.getAttribute('data-bs-target');
	let target = document.querySelector(targetID);
	let icon = button.querySelector('.toggle-icon');

	// Khi danh mục mở ra -> đổi icon thành "-"
	target.addEventListener('shown.bs.collapse', function () {
		icon.classList.remove('fi-rr-plus');
		icon.classList.add('fi-rr-minus');
	});

	// Khi danh mục đóng lại -> đổi icon thành "+"
	target.addEventListener('hidden.bs.collapse', function () {
		icon.classList.remove('fi-rr-minus');
		icon.classList.add('fi-rr-plus');
	});
});
function decreaseQuantity(idCounter) {
	let quantityInput = document.getElementById(`${idCounter}`);
	let quantity = parseInt(quantityInput.value);
	if (quantity > 1) {
		quantityInput.value = quantity - 1;
	}
}
function increaseQuantity(idCounter) {
	let quantityInput = document.getElementById(`${idCounter}`);
	let quantity = parseInt(quantityInput.value);
	quantityInput.value = quantity + 1;
}

const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");

function updatePrice() {
	let price = parseInt(priceRange.value);
	priceValue.textContent = '0 VND - ' + new Intl.NumberFormat("vi-VN").format(price) + " VND";
}
if(priceRange)
{
	priceRange.addEventListener("input", updatePrice);
	updatePrice();
}

//#endregion



const dataMap = {
    camera: [
        { title: "Camera Wifi", img: "/Assest/media/collection/camera/1.png" },
        { title: "Camera IP", img: "/Assest/media/collection/camera/2.png" },
        { title: "Camera Analog", img: "/Assest/media/collection/camera/3.png" },
        { title: "Đầu ghi hình", img: "/Assest/media/collection/camera/4.png" },
        { title: "Phụ kiện", img: "/Assest/media/collection/camera/5.jpg" }
    ],
    internet: [
        { title: "Router", img: "/Assest/media/collection/network-device/1.png" },
        { title: "Switch", img: "/Assest/media/collection/network-device/2.png" },
        { title: "Wifi", img: "/Assest/media/collection/network-device/3.png" }
    ],
    smartHome: [
        { title: "Aquara", img: "/Assest/media/collection/smart-home/1.png" },
        { title: "Rạng đông", img: "/Assest/media/collection/smart-home/2.png" },
        { title: "Lumi", img: "/Assest/media/collection/smart-home/3.png" },
        { title: "Schineider", img: "/Assest/media/collection/smart-home/4.png" },
        { title: "Vconnex", img: "/Assest/media/collection/smart-home/5.png" },
	],
	doorLock: [
        { title: "Khoá cửa đại sảnh", img: "/Assest/media/collection/doorLock/1.png" },
        { title: "Khoá cửa gỗ", img: "/Assest/media/collection/doorLock/2.png" },
        { title: "Khoá cửa nhôm", img: "/Assest/media/collection/doorLock/3.png" },
        { title: "Khoá cửa kính", img: "/Assest/media/collection/doorLock/4.png" },
        { title: "Khoá cửa công", img: "/Assest/media/collection/doorLock/5.png" },
        { title: "Khoá cửa khách sạn", img: "/Assest/media/collection/doorLock/6.png" },
        { title: "Phụ kiện khóa cửa", img: "/Assest/media/collection/doorLock/7.png" },
	],
	sound: [
        { title: "Âm thanh trường học", img: "/Assest/media/collection/sound/1.png" },
		{ title: "Âm thanh hội trường", img: "/Assest/media/collection/sound/2.png" },
        { title: "Âm thanh toà nhà", img: "/Assest/media/collection/sound/3.png" },
        { title: "Âm thanh bệnh viện", img: "/Assest/media/collection/sound/4.png" },
        { title: "Âm thanh siêu thị", img: "/Assest/media/collection/sound/5.png" },
        { title: "Âm thanh quán Cafe", img: "/Assest/media/collection/sound/6.png" },
        
    ],
	onlineMeet: [
        { title: "Âm thanh phòng họp", img: "/Assest/media/collection/meeting-online/1.png" },
        { title: "Màn hình led", img: "/Assest/media/collection/meeting-online/2.png" },
        { title: "Màn hình ghép", img: "/Assest/media/collection/meeting-online/3.png" },
        { title: "TV", img: "/Assest/media/collection/meeting-online/4.png" },
        { title: "Phụ kiện phòng họp", img: "/Assest/media/collection/meeting-online/5.png" },
        { title: "Camera hội nghị", img: "/Assest/media/collection/meeting-online/6.png" },
        { title: "Phần mềm", img: "/Assest/media/collection/meeting-online/7.png" },
    ]
};

function getData(key) {
	console.log(dataMap[key]);
    return dataMap[key];
}

function renderCategories(data) {
	return data.map((item, index) => `
		<a href="/src/ListProduct.html">
			<div class="card-info position-relative py-2 px-4"
				 style="height: fit-content; min-height: 180px; box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
				<div class="overflow-hidden">
					<img class="w-100" src="${item.img}" alt="" srcset="">
				</div>
				<div class="project-info fs-3 py-2">
					<h1 class="text-primary fs-3 title">${item.title}</h1>
				</div>
			</div>
		</a>
	`).join("");
}