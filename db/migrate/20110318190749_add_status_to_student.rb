class AddStatusToStudent < ActiveRecord::Migration
  def self.up
    add_column :students, :status, :boolean
    add_column :students, :description, :string
  end

  def self.down
    remove_column :students, :description
    remove_column :students, :status
  end
end
