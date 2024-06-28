enum Availibility {
  AVAILABLE = 'в наличии',
  BY_ORDER = 'под заказ',
  NOT_AVAILABLE = 'товар недоступен',
}

enum TermsOfDelivery {
  ONE_TWO_DAYS = '1-2 дня',
  THREE_FOUR_DAYS = '3-4 дня',
  FIVE_SIX_DAYS = '5-6 дня',
  ONE_WEEK = '1 неделя',
}
enum TypesOfOffers {
  ALL = 'all',
  GOODS = 'goods',
  SERVICES = 'services',
}

const searchMenuItems = [
  {
    id: 1,
    name: 'Товары',
    list: 'goods',
  },
  {
    id: 2,
    name: 'Услуги',
    list: 'services',
  },
]
enum TypesOfSearchDisplay {
  GOODS = 'goods',
  CATEGORIES = 'categories',
  ALL = 'all',
}
export { Availibility, searchMenuItems, TermsOfDelivery, TypesOfOffers, TypesOfSearchDisplay };
