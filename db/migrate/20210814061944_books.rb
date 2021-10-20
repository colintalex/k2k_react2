class Books < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :illustrator
      t.text   :description
      t.string :copyright, default: "\u00A9 Kid2Kid Lit"
      t.date   :publishing_date
      
      t.timestamps
    end

  end
end
