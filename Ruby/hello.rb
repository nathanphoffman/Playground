# Run with: ./rails.sh . ruby hello.rb
Person = Struct.new(:name, :age)

people = [Person.new("Ada", 36), Person.new("Linus", 28)]
people.select { |p| p.age > 30 }.each { |p| puts "Hello, #{p.name}" }  # blocks instead of loops
