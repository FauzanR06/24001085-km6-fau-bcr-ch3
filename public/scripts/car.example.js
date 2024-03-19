class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
          <div class="col-md-4 mx-2">
              <div class="card mx-0 my-3 rounded"  style="width: 18rem; ">
                  <img src="${this.image}" class="card-img-top img-fluid" alt="${this.manufacture}" style="height: 195px; border-radius: 3px; object-fit: cover;" />
                  <div class="card-body" style="font-size: 14px">
                      <p class="card-title">${this.manufacture} / ${this.type}</p>
                      <p class="fw-bold">Rp. ${this.rentPerDay} / hari</p>
                      <p class="card-text">${this.description}</p>
                      <div class="my-2"><span><img class="me-2" src="./assets/icons/icon_users.png" /></span>${this.capacity} Orang</div>
                      <div class="my-2"><span><img class="me-2" src="./assets/icons/icon_settings.png" /></span>${this.transmission}</div>
                      <div class="my-2"><span><img class="me-2" src="./assets/icons/icon_calendar.png" /></span>Tahun ${this.year}</div>
                      <a href="#" class="btn btn-success w-100 mt-2 fw-bold mt-4 " style="font-size: 14px">Pilih Mobil</a>
                  </div>
              </div>
          </div>    `;
  }
}
