require 'test_helper'

class TicketsControllerTest < ActionController::TestCase
  setup do
    @ticket = tickets(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:tickets)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create ticket" do
    assert_difference('Ticket.count') do
      post :create, ticket: { customer_code: @ticket.customer_code, date_needed: @ticket.date_needed, invoice_date: @ticket.invoice_date, invoice_num: @ticket.invoice_num, order_date: @ticket.order_date, order_id: @ticket.order_id, order_num: @ticket.order_num, route_code: @ticket.route_code, status_code: @ticket.status_code, total: @ticket.total }
    end

    assert_redirected_to ticket_path(assigns(:ticket))
  end

  test "should show ticket" do
    get :show, id: @ticket
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @ticket
    assert_response :success
  end

  test "should update ticket" do
    patch :update, id: @ticket, ticket: { customer_code: @ticket.customer_code, date_needed: @ticket.date_needed, invoice_date: @ticket.invoice_date, invoice_num: @ticket.invoice_num, order_date: @ticket.order_date, order_id: @ticket.order_id, order_num: @ticket.order_num, route_code: @ticket.route_code, status_code: @ticket.status_code, total: @ticket.total }
    assert_redirected_to ticket_path(assigns(:ticket))
  end

  test "should destroy ticket" do
    assert_difference('Ticket.count', -1) do
      delete :destroy, id: @ticket
    end

    assert_redirected_to tickets_path
  end
end
