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

const postMenuFilterItems = [
  {
    id: 1,
    name: 'Активные',
    list: 'active',
  },
  {
    id: 2,
    name: 'Черновики',
    list: 'drafts',
  },
  {
    id: 3,
    name: 'Истёк срок размещения',
    list: 'expired',
  },
  {
    id: 4,
    name: 'Отключенные',
    list: 'disabled',
  },
  {
    id: 5,
    name: 'Архив',
    list: 'archive',
  },
]

export { Availibility, searchMenuItems, TermsOfDelivery, TypesOfOffers, TypesOfSearchDisplay, postMenuFilterItems };
