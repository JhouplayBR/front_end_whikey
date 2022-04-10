class WhiskyList
  include HTTParty
  base_uri 'https://evening-citadel-85778.herokuapp.com/whiskey'

  def initialize
    @options = {}
  end

  def all_whisky
    self.class.get('/',@options)
  end
end
