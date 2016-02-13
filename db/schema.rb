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

ActiveRecord::Schema.define(version: 20160213231712) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "lines", force: :cascade do |t|
    t.string   "description"
    t.string   "uom"
    t.integer  "quantity"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "ticket_id"
  end

  add_index "lines", ["ticket_id"], name: "index_lines_on_ticket_id", using: :btree

  create_table "tickets", force: :cascade do |t|
    t.string   "order_id"
    t.string   "order_num"
    t.date     "date_needed"
    t.string   "invoice_num"
    t.string   "invoice_date"
    t.string   "status_code"
    t.string   "customer_code"
    t.float    "total"
    t.string   "route_code"
    t.date     "order_date"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_foreign_key "lines", "tickets"
end
