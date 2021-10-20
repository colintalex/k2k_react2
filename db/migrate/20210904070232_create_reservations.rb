class CreateReservations < ActiveRecord::Migration[6.1]
  def change
    create_table :reservations do |t|
      t.string :name_first
      t.string :name_last
      t.string :email
      t.string :phone_number
      t.string :grade
      t.text :safety_notes
      t.text :other_notes
      t.integer :ticket_count
      t.boolean :paid?

      t.timestamps
    end
    add_reference :reservations, :workshop, foreign_key: true
  end
end
