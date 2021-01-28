module ApplicationHelper
  def tailwind_classes_for(flash_type)
    {
      notice: "bg-emerald-400 border-l-4 border-emerald-700 text-white",
      error:   "bg-red-400 border-l-4 border-red-700 text-black",
    }.stringify_keys[flash_type.to_s] || flash_type.to_s
  end

  def current_order
    # USE find by id to avoid potentional errors
    if Order.find_by_id(session[:order_id]).nil?
      Order.new
    else
      Order.find_by_id(session[:order_id])
    end
  end
end
