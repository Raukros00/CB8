/** Utility **/

const createEl = (el) => {
  return document.createElement(el);
};

/** END UTILITY **/

/** FUNCTIONS **/

const createNavLink = (name, className) => {
  const li = createEl("li");
  const a = createEl("a");

  if (className !== null) a.className = className;
  a.textContent = name;

  li.appendChild(a);

  return li;
};

const createHeader = () => {
  const headerEl = createEl("header");
  const headEl = createEl("div");
  const mainHeaderEl = createEl("div");
  const logoEl = createEl("div");
  const logoImgEl = createEl("img");
  const toggleEl = createEl("input");
  const menuButtonContainerEl = createEl("label");
  const menuButtonEl = createEl("div");
  const menuEl = createEl("ul");
  const menuActionEl = createEl("ul");

  headEl.className = "head";
  mainHeaderEl.className = "main-header";
  logoEl.className = "logo";
  menuButtonContainerEl.className = "menu-button-container";
  menuButtonEl.className = "menu-button";
  menuEl.className = "menu";
  menuActionEl.className = "menu actions";

  logoImgEl.src = "./assets/logo.svg";
  logoImgEl.alt = "logo agency";

  toggleEl.id = "menu-toggle";
  toggleEl.type = "checkbox";
  menuButtonContainerEl.setAttribute("for", "menu-toggle");

  ["Home", "About", "Shop", "Contact"].forEach((li) => {
    let className = li === "Home" ? "active" : null;
    menuEl.appendChild(createNavLink(li, className));
  });

  menuActionEl.appendChild(createNavLink("Sign Up", null));
  menuActionEl.appendChild(createNavLink("Order", "btn btn-line"));

  menuButtonContainerEl.appendChild(menuButtonEl);
  logoEl.appendChild(logoImgEl);
  mainHeaderEl.append(
    logoEl,
    toggleEl,
    menuButtonContainerEl,
    menuEl,
    menuActionEl
  );
  headEl.appendChild(mainHeaderEl);
  headerEl.appendChild(headEl);

  return headerEl;
};

const createHero = (heroInfo) => {
  const heroEl = createEl("section");
  const heroWrapperEl = createEl("div");
  const heroTextEl = createEl("div");
  const titleEl = createEl("h1");
  const paraEl = createEl("p");
  const buttonEl = createEl("a");
  const heroImgEl = createEl("div");
  const imgEl = createEl("img");

  heroEl.className = "container hero";
  heroWrapperEl.className = "hero-wrapper";
  heroTextEl.className = "hero-text";
  buttonEl.className = "btn btn-primary";
  heroImgEl.className = "hero-img";

  titleEl.textContent = heroInfo.title;
  paraEl.textContent = heroInfo.text;
  buttonEl.textContent = "GET STARTED";

  imgEl.src = heroInfo.imgUrl;
  imgEl.alt = heroInfo.alt;

  heroImgEl.appendChild(imgEl);
  heroTextEl.append(titleEl, paraEl, buttonEl);
  heroWrapperEl.append(heroTextEl, heroImgEl);
  heroEl.appendChild(heroWrapperEl);

  return heroEl;
};

const createSectionTitle = (sectionInfo) => {
  const sectionEl = createEl("div");
  const sectionWrapperEl = createEl("div");
  const titleEl = createEl("h3");
  const textEl = createEl("p");

  sectionEl.className = "container section-title";
  sectionWrapperEl.className = "section-title-wrapper";

  titleEl.textContent = sectionInfo.title;
  textEl.textContent = sectionInfo.text;

  sectionWrapperEl.append(titleEl, textEl);
  sectionEl.appendChild(sectionWrapperEl);

  return sectionEl;
};

const createService = (serviceInfo) => {
  const serviceEl = createEl("div");
  const imgEl = createEl("img");
  const titleEl = createEl("h4");
  const textEl = createEl("p");

  serviceEl.className = "service";

  imgEl.src = serviceInfo.imgUrl;
  imgEl.alt = serviceInfo.alt;

  titleEl.textContent = serviceInfo.title;
  textEl.textContent = serviceInfo.text;

  serviceEl.append(imgEl, titleEl, textEl);

  return serviceEl;
};

const createServiceSection = (services) => {
  const servicesEl = createEl("section");
  const servicesWrapperEl = createEl("div");

  servicesEl.className = "container";
  servicesWrapperEl.className = "services-wrapper";

  services.forEach((service) =>
    servicesWrapperEl.appendChild(createService(service))
  );

  servicesEl.appendChild(servicesWrapperEl);

  return servicesEl;
};

const createArticle = (artcileInfo) => {
  const articleEl = createEl("article");
  const articleWrapperEl = createEl("div");
  const imgEl = createEl("img");
  const articleTextEl = createEl("div");
  const titleEl = createEl("h3");
  const textEl = createEl("p");
  const buttonEl = createEl("a");

  articleEl.className = "container";
  articleWrapperEl.className = "article-wrapper";
  articleTextEl.className = "article-text";
  buttonEl.className = "btn btn-primary";

  imgEl.src = artcileInfo.imgUrl;
  imgEl.alt = artcileInfo.alt;

  titleEl.textContent = artcileInfo.title;
  textEl.textContent = artcileInfo.text;
  buttonEl.textContent = "READ MORE";

  articleTextEl.append(titleEl, textEl, buttonEl);
  articleWrapperEl.append(imgEl, articleTextEl);
  articleEl.appendChild(articleWrapperEl);

  return articleEl;
};

const createBanner = () => {
  const bannerEl = createEl("section");
  const bannerWrapperEl = createEl("div");
  const titleEl = createEl("h2");
  const buttonEl = createEl("a");

  bannerEl.className = "container banner";
  bannerWrapperEl.className = "banner-wrapper";
  buttonEl.className = "btn btn-white";

  titleEl.textContent = "Join in our team!";
  buttonEl.textContent = "JOIN";

  bannerWrapperEl.append(titleEl, buttonEl);
  bannerEl.appendChild(bannerWrapperEl);

  return bannerEl;
};

const createPost = (postInfo) => {
  const postEl = createEl("article");
  const imgEl = createEl("img");
  const postTextEl = createEl("div");
  const titleEl = createEl("h4");
  const textEl = createEl("p");
  const buttonEl = createEl("a");

  postTextEl.className = "text-post";
  titleEl.className = "post-title";
  buttonEl.className = "post-button";

  imgEl.src = postInfo.imgUrl;
  imgEl.alt = postInfo.alt;

  titleEl.textContent = postInfo.title;
  textEl.textContent = postInfo.text;
  buttonEl.textContent = "Read more ➝";

  postTextEl.append(titleEl, textEl, buttonEl);
  postEl.append(imgEl, postTextEl);

  return postEl;
};

const createBlogSection = (postList) => {
  const blogEl = createEl("section");
  const blogWrapperEl = createEl("div");

  blogEl.className = "container";
  blogWrapperEl.className = "blog-wrapper";

  postList.forEach((post) => blogWrapperEl.appendChild(createPost(post)));

  blogEl.appendChild(blogWrapperEl);
  return blogEl;
};

const createFormRow = (inputs) => {
  const rowEl = createEl("div");
  const inputFirstEl = createEl("input");
  const inputSecondEl = createEl("input");

  rowEl.className = "row";

  inputFirstEl.type = inputs[0].type;
  inputSecondEl.type = inputs[1].type;

  inputFirstEl.placeholder = inputs[0].placeholder;
  inputSecondEl.placeholder = inputs[1].placeholder;

  rowEl.append(inputFirstEl, inputSecondEl);
  return rowEl;
};

const createContactSection = (info, contactFormInput) => {
  const contactEl = createEl("section");
  const contactWrapperEl = createEl("div");
  const contactInfoEl = createEl("div");
  const titleEl = createEl("h2");
  const textEl = createEl("p");
  const contactForm = createEl("div");
  const rowTextEl = createEl("div");
  const textAreaEl = createEl("textarea");
  const rowSubmitEl = createEl("div");
  const submitEl = createEl("a");

  contactEl.className = "container contact";
  contactWrapperEl.className = "contact-wrapper";
  contactInfoEl.className = "contact-info";
  contactForm.className = "contact-form";
  rowTextEl.className = "row";
  rowSubmitEl.className = "row";
  submitEl.className = "btn btn-submit";

  titleEl.textContent = info.title;
  textEl.textContent = info.text;

  textAreaEl.rows = "10";
  textAreaEl.placeholder = "Your message...";

  submitEl.textContent = "Submit";

  contactFormInput.forEach((inputs) => {
    contactForm.appendChild(createFormRow(inputs));
  });

  rowTextEl.appendChild(textAreaEl);
  rowSubmitEl.appendChild(submitEl);
  contactForm.append(rowTextEl, rowSubmitEl);
  contactInfoEl.append(titleEl, textEl);
  contactWrapperEl.append(contactInfoEl, contactForm);
  contactEl.appendChild(contactWrapperEl);

  return contactEl;
};

const createFooter = () => {
  const footerEl = createEl("footer");
  const footerWrapper = createEl("div");
  const titleEl = createEl("h4");
  const textEl = createEl("p");
  const copyEl = createEl("div");
  const copyText = createEl("small");

  footerWrapper.className = "footer-wrapper";
  copyEl.className = "copy";

  titleEl.textContent = "Company";
  textEl.textContent =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti fuga eaque quo voluptatum doloribus incidunt deleniti laudantium commodi ipsam libero ratione vero fugit placeat dolor, quia in eveniet labore voluptatibus.";
  copyText.textContent = "©2023 Agency";

  copyEl.appendChild(copyText);
  footerWrapper.append(titleEl, textEl, copyEl);
  footerEl.appendChild(footerWrapper);

  return footerEl;
};

/** END FUNCTIONS **/

/** MOCK **/

const heroInfo = {
  title: "Elevate Your Programming Journey to New Heights!",
  text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum deleniti nobis iure inventore sed laudantium, animi pariatur rerum beatae itaque, ea, modi enim totam eaque. Autem quisquam reprehenderit id minima!",
  imgUrl: "./assets/hero.svg",
  alt: "Hero image",
};

const sectionsInfo = [
  {
    title: "Our Services",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam repellat expedita.",
  },
  {
    title: "Our Blog",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam repellat expedita.",
  },
];

const services = [
  {
    title: "Service 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, tenetur?",
    imgUrl: "./assets/service1.svg",
    alt: "Service 1 image",
  },
  {
    title: "Service 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, tenetur?",
    imgUrl: "./assets/service2.svg",
    alt: "Service 2 image",
  },
  {
    title: "Service 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, tenetur?",
    imgUrl: "./assets/service3.svg",
    alt: "Service 3 image",
  },
];

const articles = [
  {
    title: "Article title",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi itaque, repudiandae modi in saepe rerum eaque blanditiis, similique distinctio incidunt quisquam eius magnam consectetur? Incidunt delectus quasi numquam iste veniam eaque atque? Dolor similique quisquam beatae itaque qui aliquid quaerat!",
    imgUrl: "./assets/article1.svg",
    alt: "Article image",
  },
  {
    title: "Article title",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi itaque, repudiandae modi in saepe rerum eaque blanditiis, similique distinctio incidunt quisquam eius magnam consectetur? Incidunt delectus quasi numquam iste veniam eaque atque? Dolor similique quisquam beatae itaque qui aliquid quaerat!",
    imgUrl: "./assets/article2.svg",
    alt: "Article image",
  },
];

const postList = [
  {
    title: "Title article",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, delectus necessitatibus! Corporis vel repudiandae excepturi deserunt dolorum rerum, inventore soluta molestias. Repellat eligendi repellendus, est odit ullam corrupti id quisquam perspiciatis consequatur atque commodi doloribus quas mollitia facere consequuntur hic?",
    imgUrl: "./assets/post1.jpg",
    alt: "Article post",
  },
  {
    title: "Title article",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, delectus necessitatibus! Corporis vel repudiandae excepturi deserunt dolorum rerum, inventore soluta molestias. Repellat eligendi repellendus, est odit ullam corrupti id quisquam perspiciatis consequatur atque commodi doloribus quas mollitia facere consequuntur hic?",
    imgUrl: "./assets/post2.jpg",
    alt: "Article post",
  },
  {
    title: "Title article",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, delectus necessitatibus! Corporis vel repudiandae excepturi deserunt dolorum rerum, inventore soluta molestias. Repellat eligendi repellendus, est odit ullam corrupti id quisquam perspiciatis consequatur atque commodi doloribus quas mollitia facere consequuntur hic?",
    imgUrl: "./assets/post3.jpg",
    alt: "Article post",
  },
];

const contactInfo = {
  title: "Contact us",
  text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo sapiente incidunt consequatur, aperiam ut officiis, tenetur, quae eius facilis ad exercitationem! Facere sapiente odio nostrum deserunt nam dicta, explicabo corporis?",
};

const contactFormInput = [
  [
    {
      type: "text",
      placeholder: "First name",
    },
    {
      type: "text",
      placeholder: "Last name",
    },
  ],
  [
    {
      type: "email",
      placeholder: "Email",
    },
    {
      type: "text",
      placeholder: "Subject",
    },
  ],
];

/** END MOCK **/

const main = createEl("main");
main.append(
  createHero(heroInfo),
  createSectionTitle(sectionsInfo[0]),
  createServiceSection(services),
  createArticle(articles[0]),
  createBanner(),
  createArticle(articles[1]),
  createSectionTitle(sectionsInfo[1]),
  createBlogSection(postList),
  createContactSection(contactInfo, contactFormInput)
);

document.body.append(createHeader(), main, createFooter());
