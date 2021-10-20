class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name_first
      t.string :name_last
      t.string :email
      t.string :password_digest
      
      t.timestamps
    end
    
    add_reference :users, :role, index: true
  end
end
