# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180405232533) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "business_categories", force: :cascade do |t|
    t.string "category", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category"], name: "index_business_categories_on_category"
  end

  create_table "business_category_memberships", force: :cascade do |t|
    t.integer "business_id", null: false
    t.integer "business_category_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["business_category_id"], name: "index_business_category_memberships_on_business_category_id"
    t.index ["business_id"], name: "index_business_category_memberships_on_business_id"
  end

  create_table "businesses", force: :cascade do |t|
    t.integer "owner_id", null: false
    t.string "name", null: false
    t.string "neighbourhood"
    t.string "address", null: false
    t.string "city", null: false
    t.string "state", null: false
    t.decimal "latitude", null: false
    t.decimal "longitude", null: false
    t.decimal "price", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["owner_id"], name: "index_businesses_on_owner_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "profile_picture_url", null: false
    t.string "city", null: false
    t.string "state", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["username"], name: "index_users_on_username"
  end

end
