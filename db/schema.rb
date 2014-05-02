# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20140422045842) do

  create_table "admins", force: true do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "admins", ["email"], name: "index_admins_on_email", unique: true, using: :btree
  add_index "admins", ["reset_password_token"], name: "index_admins_on_reset_password_token", unique: true, using: :btree

  create_table "aminities", force: true do |t|
    t.integer  "property_id"
    t.string   "aminity_type"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "contacts", force: true do |t|
    t.integer  "property_id"
    t.string   "name"
    t.string   "email"
    t.string   "phone"
    t.text     "question"
    t.string   "contact_option"
    t.datetime "appointment_time"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.float    "from_budget"
    t.float    "to_budget"
    t.string   "location"
  end

  create_table "crms", force: true do |t|
    t.string   "exe_name"
    t.string   "builder_name"
    t.string   "location"
    t.date     "crm_date"
    t.string   "listing",        limit: 4
    t.integer  "no_of_listings"
    t.text     "comment"
    t.string   "payment_type"
    t.string   "property_name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "images", force: true do |t|
    t.integer  "property_id"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "properties", force: true do |t|
    t.string   "property_type"
    t.string   "property_listing"
    t.string   "title"
    t.integer  "price"
    t.string   "no_of_rooms"
    t.string   "area"
    t.string   "furnished"
    t.string   "city"
    t.string   "location"
    t.text     "description"
    t.string   "person_type"
    t.string   "name"
    t.string   "email"
    t.string   "mobile"
    t.string   "type_of_land"
    t.string   "accomidiation"
    t.float    "longitude"
    t.float    "latitude"
    t.boolean  "gmaps"
    t.string   "status",                     default: "active"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "view_count",                 default: 0
    t.integer  "contacts_count",             default: 0
    t.string   "creatiwa_team",    limit: 3
    t.integer  "bath_rooms"
  end

end
