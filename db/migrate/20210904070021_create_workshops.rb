class CreateWorkshops < ActiveRecord::Migration[6.1]
  def change
    create_table :workshops do |t|
      t.string :name
      t.text :description
      t.text :short_description
      t.datetime :date
      t.string :city
      t.string :street
      t.string :state
      t.string :zip
      t.integer :max_reservations
      t.boolean :free?
      t.float :cost
      t.integer :status

      t.timestamps
    end
  end
end
