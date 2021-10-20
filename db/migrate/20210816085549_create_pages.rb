class CreatePages < ActiveRecord::Migration[6.1]
  def change
    create_table :pages do |t|
      t.integer :page_number
      
      t.timestamps
    end
    
    add_reference :pages, :book, index: true
  end
end
