import { type NextRequest, NextResponse } from "next/server";

const eyeswear = {
  "brands": [
    {
      "name": "Ray-Ban",
      "country": "Italy",
      "founded": 1936,
      "parent_company": "EssilorLuxottica",
      "specialty": ["sunglasses", "optical"],
      "popular_models": ["Aviator", "Wayfarer", "Clubmaster"]
    },
    {
      "name": "Oakley",
      "country": "USA",
      "founded": 1975,
      "parent_company": "EssilorLuxottica",
      "specialty": ["sports eyewear", "sunglasses"],
      "popular_models": ["Holbrook", "Jawbreaker", "Radar EV"]
    },
    {
      "name": "Persol",
      "country": "Italy",
      "founded": 1917,
      "parent_company": "EssilorLuxottica",
      "specialty": ["luxury sunglasses", "optical"],
      "popular_models": ["649", "714", "3019S"]
    },
    {
      "name": "Warby Parker",
      "country": "USA",
      "founded": 2010,
      "parent_company": null,
      "specialty": ["optical", "sunglasses"],
      "popular_models": ["Durand", "Percey", "Haskell"]
    },
    {
      "name": "Oliver Peoples",
      "country": "USA",
      "founded": 1987,
      "parent_company": "EssilorLuxottica",
      "specialty": ["luxury optical", "sunglasses"],
      "popular_models": ["Gregory Peck", "O'Malley", "Cary Grant"]
    },
    {
      "name": "Maui Jim",
      "country": "USA",
      "founded": 1980,
      "parent_company": "Kering",
      "specialty": ["polarized sunglasses"],
      "popular_models": ["Peahi", "Ho'okipa", "Wiki Wiki"]
    },
    {
      "name": "Tom Ford",
      "country": "Italy",
      "founded": 2005,
      "parent_company": "Marcolin",
      "specialty": ["luxury sunglasses", "optical"],
      "popular_models": ["Whitney", "Jennifer", "Henry"]
    },
    {
      "name": "Gucci",
      "country": "Italy",
      "founded": 1921,
      "parent_company": "Kering",
      "specialty": ["luxury sunglasses", "optical"],
      "popular_models": ["GG0061S", "GG0036S", "Horsebit"]
    },
    {
      "name": "Moscot",
      "country": "USA",
      "founded": 1915,
      "parent_company": null,
      "specialty": ["vintage-style optical", "sunglasses"],
      "popular_models": ["Lemtosh", "Miltzen", "Zolman"]
    },
    {
      "name": "Carrera",
      "country": "Austria",
      "founded": 1956,
      "parent_company": "Safilo",
      "specialty": ["sports sunglasses", "fashion eyewear"],
      "popular_models": ["Champion", "Grand Prix", "1001/S"]
    }
  ]
};

export function GET(request: NextRequest) {
  // return NextResponse.json({message:'hello world'})
  return NextResponse.json({brands: eyeswear.brands})
}