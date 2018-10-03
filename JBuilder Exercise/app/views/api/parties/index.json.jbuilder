

json.array! @parties do |party|
  json.extract! party, :name, :location
  json.guests do
    party.guests.each do |guest|
      json.partial! 'api/guests/guest', guest: guest
    end
  end
end
