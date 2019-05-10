Fetch locations:
-map.jsx-componentdidmount: call name/latitude/longitude/Restaurant or Attraction
-'/location/restaurants'
-'/location/attractions'
-index.jsx: hotels arr restaurants arr and attractions arr
-'location/attractions'
-'location/restaurants'
-'location/hotels'
Routes:
GET:
'/restaurants'- array of restaurant objects
[{Name: string,
NumberOfReviews: INT ,
ReviewScore: DECIMAL(1,1) ,
Addr1: string,
Addr2: string,
City: string ,
State: string ,
PostalCode: INT ,
DistanceFromHotel: DECIMAL(3,1) ,
Latitude: Decimal(5,6) ,
Longitude: Decimal(5,6) ,
}]
'/attractions' - array of attraction objects
[{
Name: string,
NumberOfReviews: INT ,
ReviewScore: DECIMAL(1,1) ,
Addr1: string,
Addr2: string,
City: string ,
State: string ,
PostalCode: INT ,
DistanceFromHotel: DECIMAL(3,1) ,
Latitude: Decimal(5,6) ,
Longitude: Decimal(5,6) ,
}]
'/hotels' - Specific hotel by ID---keep
{
WalkableScore: INT ,
Addr1: string,
Addr2: string,
City: string ,
State: string ,
PostalCode: INT ,
Latitude: Decimal(5,5) ,
Longitude: Decimal(5,5) ,
NearestAirport: string ,
NearestAirportDistance: INT ,
}
PUT:
'/distanceMatrix' - updates a hotels distance to a restaurant
Update hotel dist to restaurant
'/geocode' - sets lattitute and longitude of an attraction
Set lat and long of attraction
'/initialize' - doesnt do anything
Does nothing
