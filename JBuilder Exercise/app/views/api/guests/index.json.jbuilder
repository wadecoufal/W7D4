json.array! @guests do |guest|
  next if !guest.age.between?(40,50)
  json.partial! 'guest', guest: guest
end
